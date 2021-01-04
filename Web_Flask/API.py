#!/usr/bin/env python

from flask import Flask, jsonify, request


app = Flask(__name__)

@app.route('/api/v1/recognition/', methods=['POST'])
def recognition():
    # On recupere le corps (payload) de la requete qui doit être une image
    payload = request.form.to_dict()

    # Calcul de ce que contient l'image

    result = jsonify(tomate="5", salade="4")

    return result
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)