import { db } from '../firebase/firebase'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

const gameCollection = collection(db, 'juegos')

export const getGames = async () => {
    const snapshot = await getDocs(gameCollection)

    return snapshot.docs.map( doc => ({
        id: doc.id,
        ...doc.data()
    }))
}

export const createGame = async (game) => {
    return await addDoc(gameCollection, game)
}

export const updateGame = async (id, game) => {
    const gameRef = doc(db, 'movies', id)
    return await updateDoc(gameRef, game)
}

export const deleteGame= async (id) => {
    const gameRef = doc(db, 'games', id)
    return await deleteDoc(gameRef)
}

