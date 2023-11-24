import { initializeApp } from "firebase/app";
import { getFirestore,addDoc, serverTimestamp, collection, getDocs, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOPhAvavMNND2shDVA68dZBDWokCQ3cQY",
  authDomain: "data-algoritmos-5e26d.firebaseapp.com",
  projectId: "data-algoritmos-5e26d",
  storageBucket: "data-algoritmos-5e26d.appspot.com",
  messagingSenderId: "1080782283856",
  appId: "1:1080782283856:web:b134f5162151770b379d55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addUser = async (user: any) => {
  try {
    const commentData = collection(db, "Users");
    await addDoc(commentData, {
      ...user,
      createdAt: serverTimestamp(),
    });
    console.log("Buenas");
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Users"));
    const used: any = [];

    querySnapshot.forEach((doc) => {
      const users = doc.data();
      used.push({
        id: doc.id,
        ...users,
      });
    });  

  } catch (error) {
    console.error(error);
    return [];
  }
}



