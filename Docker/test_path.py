from flask import Flask, jsonify, request
import cv2

app = Flask(__name__)

@app.route('/',methods = ['GET'])
def index():
    return "Hello world !"

@app.route('/recognition', methods=['POST'])
def recognition():

  #Lecture de la requete
  req = request.files['photo']

  #Sauvegarde de l'image a la racine
  req.save('askedRecognition.jpg')
  
  #io.imshow('./askedRecognition.jpg') # Affichage de l'image
  """
  #Detection des elements de l'image
  detections = performDetect()
  """

  #Initialisation du resultat
  result = {}
  """
  #Ajout dans le resultat les elements reconnus avec leur recurrence
  for detection in detections :
    if detection[0] in result.keys():
      result[detection[0]] += 1
    else:
      result[detection[0]] = 1

  #Formatage du resultat pour la reponse
  result = jsonify(result)
  """
  return result
    

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=80)