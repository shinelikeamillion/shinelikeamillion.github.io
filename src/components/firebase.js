import React from "react"
import firebase from "firebase/app"
import "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyB3RqHtFtJNN7fpWhpuZdSdnqabhybp5N0",
  authDomain: "github-io-2aef7.firebaseapp.com",
  databaseURL: "https://github-io-2aef7.firebaseio.com",
  projectId: "github-io-2aef7",
  storageBucket: "github-io-2aef7.appspot.com",
  messagingSenderId: "1051295703190",
  appId: "1:1051295703190:web:d4d76581161a750d7062b7",
  measurementId: "G-MYX70V4G28",
}
const Firebase = () => {
  if (!firebase.apps.length && typeof window !== "undefined") {
    firebase.initializeApp(firebaseConfig)
    firebase.analytics().logEvent("first_init.")
  }
  return <></>
}

export default Firebase
