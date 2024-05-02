import {deleteDoc, doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import firebase_app from "@/util/firebase";


const firestore_db = getFirestore(firebase_app)

export const getProfileData = async () => {

    const result = await getDoc(doc(firestore_db, "profile", "default"))

    if (result.exists()) {
        return result.data();
    } else {
        throw new Error("data not found")
    }
}

export const getSensorData = async () => {
    const result = await getDoc(doc(firestore_db, "EspData", "DHT11"))

    if (result.exists()) {
        return result.data();
    } else {
        throw new Error("data not found")
    }
}

export const getCachedWeatherData = async () => {
    const result = await getDoc(doc(firestore_db, "weather", "default"))

    if (result.exists()) {
        return result.data();
    } else {
        return null
    }
}

export const setCachedWeatherData = async (data: any) => {
    await setDoc(doc(firestore_db, "weather", "default"), data)
}

export const deleteCachedWeatherData = async () => {
    await deleteDoc(doc(firestore_db, "weather", "default"))
}