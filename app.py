from flask import Flask, render_template, request
import joblib
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

nltk.download('stopwords')

app = Flask(__name__)
model = joblib.load("spoiler_model.pkl")
tfidf = joblib.load("tfidf_vectorizer.pkl")

stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

def clean_text(text):
    text = text.lower()
    text = re.sub('[^a-z ]',' ', text)
    words = text.split()
    words = [stemmer.stem(w) for w in words if w not in stop_words]
    return " ".join(words)

def predict(text):
    text = clean_text(text)
    vec = tfidf.transform([text])
    pred = model.predict(vec)[0]
    return "⚠️ Spoiler" if pred else "✅ No Spoiler"

@app.route("/", methods=["GET","POST"])
def index():
    result=None
    review=""

    if request.method=="POST":
        review=request.form["review"]
        result=predict(review)

    return render_template("index.html",result=result,review=review)

if __name__ == "__main__":
    app.run()