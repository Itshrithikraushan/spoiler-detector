# 🎬 Movie Review Spoiler Detector

A simple **Flask-based web application** that detects whether a movie
review contains a **spoiler or not** using a trained Machine Learning
model.

---

## 🚀 Features

- Detects spoilers from user input text
- Uses **TF-IDF Vectorization + ML model**
- Real-time prediction via web interface
- Text preprocessing using **NLTK**
- Clean and minimal UI

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS
- **Backend:** Flask (Python)
- **Machine Learning:** scikit-learn
- **NLP:** NLTK
- **Model Storage:** joblib

---

## 📂 Project Structure

    spoiler-detector-main/
    │── app.py
    │── requirements.txt
    │── spoiler_model.pkl
    │── tfidf_vectorizer.pkl
    │
    ├── templates/
    │   └── index.html
    │
    └── static/
        └── style.css

---

## ⚙️ How It Works

1.  User enters a movie review
2.  Text is cleaned (lowercase, remove symbols, stopwords, stemming)
3.  TF-IDF converts text into numerical form
4.  Model predicts spoiler or not
5.  Result displayed on webpage

---

## ▶️ Running the Project

### 1. Clone the repository

    git clone <your-repo-link>
    cd spoiler-detector-main

### 2. Install dependencies

    pip install -r requirements.txt

### 3. Run the app

    python app.py

### 4. Open browser

    http://127.0.0.1:5000/

---

## 📦 Requirements

- flask
- scikit-learn
- nltk
- joblib

---
