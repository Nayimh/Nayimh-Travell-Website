import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBase.conFig";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;