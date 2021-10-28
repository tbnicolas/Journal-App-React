import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const  { active:note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef( note.id );
    
    useEffect(() => {
        if ( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id;
        }
    }, [note,reset]);


    useEffect(() => {
        
        dispatch( activeNote(formValues.id,{...formValues}) );
        
    }, [formValues,dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    name="body"
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    value= { body }
                    onChange={ handleInputChange}
                />
                <textarea 
                    name="title"
                    className="notes__textarea"
                    placeholder="What happened today"
                    value= { title }
                    onChange={ handleInputChange}
                >

                </textarea>

                {   
                    (note.url) 
                    &&
                    <div className="notes__images">
                        <img 
                            src={note.url}
                            alt="Landscape" 
                        />
                    </div>
                }

            </div>
        </div>
    )
}
