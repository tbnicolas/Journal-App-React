import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea 
                    name=""
                    id=""
                    className="notes__textarea"
                    placeholder="What happened today"
                >

                </textarea>
                <div className="notes__images">
                    <img 
                        src="http://cdn.eso.org/images/screen/millour-01-cc.jpg"
                        alt="Landscape" 
                    />
                </div>
            </div>
        </div>
    )
}
