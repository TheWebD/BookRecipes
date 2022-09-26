import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase';
import { getAuth } from 'firebase/auth';
import { config } from "./config"

function initilizationService() {
    let firebaseApp = initializeApp(config);
    let firestore = getFirestore(firebaseApp);
    let auth = getAuth(firebaseApp);
    return { firebaseApp, firestore, auth}
}

function connectToEmulator(auth, firestore) {
    if(location.hostname === 'localhost') {
        connectFirestoreEmulator(firestore, 'localhost', )
    }
}
