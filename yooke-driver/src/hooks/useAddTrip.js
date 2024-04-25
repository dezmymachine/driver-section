import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTrip = () => {
  const tripCollectionRef = collection(db, "trips");
  const { userID } = useGetUserInfo();
  const addTrip = async ({
    pointdeprise,
    pointdedepot,
    date,
    heure,
    typedetrajet,
  }) => {
    await addDoc(tripCollectionRef, {
      userID,
      pointdeprise,
      pointdedepot,
      date,
      heure,
      typedetrajet,
      createdAt: serverTimestamp(),
    });
  };
  return { addTrip };
};
