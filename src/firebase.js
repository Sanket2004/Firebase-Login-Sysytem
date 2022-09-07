import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB2KEFsKJJQgKfzcDS2i0WMHcbEz5dvwAc",
  authDomain: "chat-1055f.firebaseapp.com",
  databaseURL: "https://chat-1055f-default-rtdb.firebaseio.com",
  projectId: "chat-1055f",
  storageBucket: "chat-1055f.appspot.com",
  messagingSenderId: "187628447032",
  appId: "1:187628447032:web:a5c5c64af3c1e6a7050dcd",
  measurementId: "G-X5XMVLGNDS"
})

export const auth = app.auth()
export default app
