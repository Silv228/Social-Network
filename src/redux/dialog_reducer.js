const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'

const InitialSate = {
    MessageData: [
        { text: "It's my first mess", ident: 1, send: 'to' },
        { text: "It's my second mess", ident: 2, send: 'from' },
        { text: "14/88???", ident: 3, send: 'to' },

    ],
    NewMessage: '',
    dialogData: [
        { name: 'Asuna', ava: 'link', ident: 1 },
        { name: 'Kirito', ava: 'link', ident: 2 },
        { name: 'Kadzuto', ava: 'link', ident: 3 },
        { name: 'Midoria', ava: 'link', ident: 4 },
        { name: 'Bakugo', ava: 'link', ident: 5 }
    ]
}

const dialogReducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {...state,
                MessageData : [ ...state.MessageData, {ident: 4, from: 'to', text: state.NewMessage}],
                NewMessage : ''
            }
        }
        case UPDATE_MESSAGE:{
            return {...state,
                NewMessage: action.newText
            }
        }
        default:
            return state
    }
}

export const addmessageActionCreate = () =>({type : ADD_MESSAGE})
export const updatemessageActionCreate = text =>({type : UPDATE_MESSAGE, newText : text})

export default dialogReducer