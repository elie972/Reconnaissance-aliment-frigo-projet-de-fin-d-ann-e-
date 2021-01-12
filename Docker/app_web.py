from flask import Flask, jsonify, request
import numpy as np
import cv2


app = Flask(__name__)

@app.route('/',methods = ['GET'])
def index():
    return "Hello world !"


@app.route('/recognition', methods=['POST'])
def recognition():
  # convert string of image data to uint8
  nparr = np.fromstring(request.data, np.uint8)
  # decode image
  img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

  #enregistrement de l'image pour le test
  cv2.imwrite('./darknet/data/askedRecognition.jpg', img)

  #detections = performDetect()

  result = {}

  for detection in detections :
    if detection[0] in result.keys():
      result[detection[0]] += 1
    else:
      result[detection[0]] = 1

  result = jsonify(result)

  return result
    

if __name__ == '__main__':
  app.run(host='0.0.0.0',port=80)