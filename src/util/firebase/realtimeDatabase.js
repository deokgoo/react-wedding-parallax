import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update, push, child } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrR8rigf4TZpGacHTJClERBOOdm5AsujA",
  authDomain: "wedding-e82c2.firebaseapp.com",
  databaseURL: "https://wedding-e82c2-default-rtdb.firebaseio.com",
  projectId: "wedding-e82c2",
  storageBucket: "wedding-e82c2.appspot.com",
  messagingSenderId: "1095835151098",
  appId: "1:1095835151098:web:5f53788e6647dec71eb743",
  measurementId: "G-MKL3X9YE94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const readGuestBookListen = (snapShotCallback) => {
  const db = getDatabase(app);
  const starCountRef = ref(db, 'guestbook');

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    snapShotCallback(data);
  });
}

export const writeGuestBook = ({ username, content }) => {
  const db = getDatabase(app);

  const postData = {
    author: username,
    content,
    createdAt: Date.now(),
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), 'guestbook')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/guestbook/' + newPostKey] = postData;

  return update(ref(db), updates);
}