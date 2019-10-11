import * as firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

export default firebase.initializeApp(config);

const google_provider = new firebase.auth.GoogleAuthProvider();
const fb_provider = new firebase.auth.FacebookAuthProvider();
const twitter_provider = new firebase.auth.TwitterAuthProvider();
const github_provider = new firebase.auth.GithubAuthProvider();

export { google_provider, fb_provider, twitter_provider, github_provider }
