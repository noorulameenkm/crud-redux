const postReducer = (state = [], action) => {

    switch(action.type){

        case 'ADD_POST': 
            return [...state, action.payload]
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.payload)
        case 'EDIT_POST': 
            return state.map(post => post.id === action.payload ? { ...post, editing: true } : post)
        case 'UPDATE_POST':
            return state.map(post => post.id === action.payload.id ? 
                                     {...post, title: action.payload.post.title, content: action.payload.post.content, editing: false } :
                                     post)
        default: 
            return state;
    }

}

export default postReducer;