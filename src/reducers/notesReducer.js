/* 

    {
        notes: [],
        active: null,
        active: {
            id: 123456,
            title: '',
            body: '',
            imageUrl: '',
            date: 1464645465546
        }
    }


*/

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
      
    
        default:
            return state;
    }

}