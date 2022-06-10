import firebase from 'firebase/compat/app';
import { USER_STATE_CHANGE } from '../constants/index'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

export function fetchUser() {
    return((dispatch) => {
        firebase.firestore()
            .collection("user")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                } 
                else {
                    console.log('does not exist')
                }
            })
        })
}