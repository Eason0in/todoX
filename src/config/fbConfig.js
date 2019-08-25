import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyALKSQMuy79T9tRVTHPSzxh1IAxbDbINa0',
  authDomain: 'todox-74ff1.firebaseapp.com',
  databaseURL: 'https://todox-74ff1.firebaseio.com',
  projectId: 'todox-74ff1',
  storageBucket: '',
  messagingSenderId: '47993453674',
  appId: '1:47993453674:web:c68497c4eea1a2e9'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
