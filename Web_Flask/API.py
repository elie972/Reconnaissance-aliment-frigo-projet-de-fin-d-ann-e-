#!/usr/bin/env python

from flask import Flask, jsonify, request
from flask_ngrok import run_with_ngrok


app = Flask(__name__)
run_with_ngrok(app)

@app.route('/')
def index():
    return "Hello world !"

@app.route('/api/v1/recognition/', methods=['POST'])
def recognition():
    # On recupere le corps (payload) de la requete qui doit être une image
    payload = request.form.to_dict()

    # Calcul de ce que contient l'image

    result = jsonify(tomate="5", salade="4")

    return result
    

if __name__ == '__main__':
    app.run()