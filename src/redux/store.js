import dialogReducer from "./dialog_reducer"
import profileReducer from "./profile_reducer"

let store = {
    _rerenderTree() {
        console.log('change')
    },
    _state: {
        ProfilePage: {
            posts: [
                { likes: 12, message: "Hi, Hitler 1488" },
                { likes: 46, message: "I'm don't nacism" }
            ],
            newTextPost: ''
        },
        MessagePage: {
            MesageData: [
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
    },
    GetState() {
        return this._state
    },
    subscribe(observe) {
        this._rerenderTree = observe
    },
    dispatch(action){
        profileReducer(this._state.ProfilePage, action)
        dialogReducer(this._state.MessagePage, action)  
        this._rerenderTree()  
    }
}
 
window.store = store
export default store;