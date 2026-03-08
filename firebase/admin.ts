// import { initializeApp } from 'firebase-admin';
// import { cert, getApps } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';
// import { getFirestore } from 'firebase-admin/firestore';

// const initFirebaseAdmin = () => {
//     const apps = getApps();

//     if(!apps.length){ 
//         initializeApp({
//             credential: cert({
//                 projectId: process.env.FIREBASE_PROJECT_ID,
//                 clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//                 privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")
//             })
//         })
//     }

//     return {
//         auth: getAuth(),
//         db: getFirestore()
//     }
// }

// export const { auth, db } = initFirebaseAdmin();

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
  if (!getApps().length) {

    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!privateKey) {
      throw new Error("Missing FIREBASE_PRIVATE_KEY");
    }

    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey,
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

export const { auth, db } = initFirebaseAdmin();