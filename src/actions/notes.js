import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const startNewNote = () => {

    return  async ( dispatch, getState ) => {
       
        const uid = getState().auth.uid;
        console.log( uid );

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        
        const doc = await addDoc(collection(db,`${uid}`, "/journal/notes"), newNote);

        console.log("Document written with ID: ", doc);
    }

}