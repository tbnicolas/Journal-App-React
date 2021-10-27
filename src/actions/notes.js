import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, addDoc,updateDoc,doc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

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

        dispatch( activeNote(doc.id, newNote) );
    }

}


export const activeNote = ( id, note ) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));

    }
}

export const setNotes = ( notes ) => {

    return {
        type: types.notesLoad,
        payload: notes
    }
}


export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        const uid = getState().auth.uid;
        
        if( !note.url ) {
            delete note.url;
        }
        //Opcion 1
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        //Opcion 2
        /* const { id, ...noteToFireStore} = note; */

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(noteRef,noteToFireStore);
        
        dispatch( refreshNote(note.id,noteToFireStore));

        Swal.fire('Saved', note.title,'success');

    }
}


export const  refreshNote = ( id, note ) => {
    return {
        type: types.notesUpdated,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
}


export const startUploading = ( file ) => {
    
    return async( dispatch,getState )=> {
        const { active:activeNote } = getState().notes;

        const fileUrl = await fileUpload( file );
        console.log(fileUrl);

    }
}