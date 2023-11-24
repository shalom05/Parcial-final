import { initializeApp } from "firebase/app";
import { getFirestore,addDoc, serverTimestamp, collection, getDocs, } from "firebase/firestore";

const firebaseConfig = {

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



