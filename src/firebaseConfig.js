import * as firebase from 'firebase';
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyB8bjuXzO2V1fJNKHDvicd6MToB-XJ8gxk",
    authDomain: "test-50a74.firebaseapp.com",
    databaseURL: "https://test-50a74.firebaseio.com",
    projectId: "test-50a74",
    storageBucket: "test-50a74.appspot.com",
    messagingSenderId: "785976169922",
    appId: "1:785976169922:web:987f31cb133ec419"
};

export default firebase.initializeApp(config)


 const google_provider= new firebase.auth.GoogleAuthProvider()
 const fb_provider= new firebase.auth.FacebookAuthProvider()
 const twitter_provider= new firebase.auth.TwitterAuthProvider()
const github_provider= new firebase.auth.GithubAuthProvider()


export {google_provider, fb_provider, twitter_provider,github_provider}