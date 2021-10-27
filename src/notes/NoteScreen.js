import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

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
                            src="http://cdn.eso.org/images/screen/millour-01-cc.jpg"
                            alt="Landscape" 
                        />
                    </div>
                }

            </div>
        </div>
    )
}
