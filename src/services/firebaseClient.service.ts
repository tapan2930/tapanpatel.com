import firebase from "firebase"

const FIREBASE_CONFIG = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONF_apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONF_authDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_CONF_projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONF_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONF_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_CONF_appId
}

export default function firebaseClient() {
    if(firebase.apps.length === 0){
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}