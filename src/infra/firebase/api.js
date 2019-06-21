import firebase from 'firebase'

export function signInWithEmailAPI(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAPI(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signInWithGoogleAPI() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

export function signInWithFacebookAPI() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}

export function signOutAPI() {
    return firebase.auth().signOut();
}
