import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Modal, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';
import Loading from './Component/Loading'

export default function App() {

  const [photo, setPhoto] = useState(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(true)

  const broccoli = require('./Image/broccoli.png')
  const aubergine = require('./Image/sad.png')

  const camera = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  let CameraComp = <Camera style={styles.cameraView} type={Camera.Constants.Type.back} ref={camera}>
    <View style={styles.cameraView}>
    </View>
  </Camera>

  let resultView = <View></View>

  if (photo && !loading) {

    if ((Object.keys(result).length === 0)) {

      resultView = <View><Text style={styles.resultText}>Rien n'a été détecté</Text></View>
    }

    else {
      resultView = [<View key='ResultView'><Text style={styles.resultText}>Resultat :</Text></View>]
      Object.keys(result).forEach(key => resultView = [...resultView, <View key={key}><Text style={styles.resultText}>{result[key]} x {key}</Text></View>])
    }
  }

  let sendButton = <View style={styles.buttonView}>
    <TouchableOpacity onPress={() => Photo()}>
      <Text style={styles.buttonText}>Prendre une photo</Text>
    </TouchableOpacity>
  </View>

  if (photo) {
    CameraComp = <Image source={{ uri: photo.uri }} style={styles.cameraView} />
    if (loading) {
      sendButton = <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => Reset()}>
          <Text style={styles.buttonText}>Loading...</Text>
        </TouchableOpacity>
      </View>
    }
    else {
      sendButton = <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => Reset()}>
          <Text style={styles.buttonText}>Recommencer</Text>
        </TouchableOpacity>
      </View>
    }

  }

  const Reset = () => {
    setPhoto(null)
    setResult({})
  }

  async function Photo() {
    let photo = await camera.current.takePictureAsync()
    setLoading(true)
    setPhoto(photo)



    const data = new FormData();

    data.append("photo", {
      name: 'photo.jpeg',
      type: 'image/jpeg',
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
    console.log('Sending...')

    fetch("http://9175b78a3cbe.ngrok.io/recognition", {
      method: "POST",
      body: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(response => response.json())
      .then(response => {

        console.log("upload succes", response);
        setResult(response)
        setLoading(false)
        alert("Upload success!");
      })
      .catch(error => {
        console.log("upload error", error);
        setLoading(false)
        alert("Upload failed!");
      });
  }





  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('./Image/Modal.png')} />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
      <View style={{ flex: 2, width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>{CameraComp}</View>

      {(!photo || loading) ? loading ? <Loading /> : <View style={{ flex: 1 }}></View> :
        <View style={{ flex: 1, width: '80%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', width: '45%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 20, borderWidth: 1 }}>{resultView}</View>

          <Image style={{ height: '100%', width: '50%' }} resizeMode='contain' source={(Object.keys(result).length === 0) ? aubergine : broccoli} />
        </View>}

      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>{sendButton}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#9ce8ff',
    paddingTop: 60
  },
  cameraView: {
    width: '98%',
    height: '100%'
  },
  buttonView: {
    height: 80,
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 30
  },
  resultText: {
    fontSize: 20
  }
});
