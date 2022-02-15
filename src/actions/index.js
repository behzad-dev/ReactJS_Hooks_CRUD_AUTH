import {
  FETCH_ALL,
  CREATE_DATA,
  DELETE_DATA,
  FETCH_DATA,
  UPDATE_DATA,
} from "./types";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "@firebase/firestore";
import { db } from "../apis/firebase-config";

export const Create_Data = (Name, Family, Age) => async (dispatch) => {
  const mydata = collection(db, "Database");
  const response = await addDoc(mydata, { Name, Family, Age });
  dispatch({ type: CREATE_DATA, payload: response });
};

export const Update_Data = (id, Name, Family, Age) => async (dispatch) => {
  const userDoc = doc(db, "Database", id);

  const response = await updateDoc(userDoc, { Name, Family, Age });

  dispatch({ type: UPDATE_DATA, payload: response });
};
export const Fetch_All = () => async (dispatch) => {
  const usersCollectionRef = collection(db, "Database"); //grabing users collection from db
  const data = await getDocs(usersCollectionRef);
  dispatch({ type: FETCH_ALL, payload: data.docs });
};

export const Delete_Data = (id) => async (dispatch) => {
  const userDoc = doc(db, "Database", id); //find which documents
  const response = await deleteDoc(userDoc);

  // console.log(response); //no respond from firebase?//todo check for respond

  dispatch({ type: DELETE_DATA, payload: id });
};
export const Fetch_Data = (id) => async (dispatch) => {
  const userDoc = doc(db, "Database", id); //find which documents
  const response = await getDoc(userDoc);

  dispatch({ type: FETCH_DATA, payload: response.data() });
};
