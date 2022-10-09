import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvRlFQ-YlpkuE39P_dMfxQASUGIn4XrhI",
  authDomain: "genshin-impact-store.firebaseapp.com",
  projectId: "genshin-impact-store",
  storageBucket: "genshin-impact-store.appspot.com",
  messagingSenderId: "1073781625664",
  appId: "1:1073781625664:web:2da3147855f26553ffe0a5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
