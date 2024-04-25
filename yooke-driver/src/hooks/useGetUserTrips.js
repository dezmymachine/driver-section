import React, { useState, useEffect } from "react";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetUserTrips = () => {
  const [trips, setTrips] = useState([]);
  const tripCollectionRef = collection(db, "trips");
  const { userID } = useGetUserInfo();
  const getTrips = async () => {
    let unsubscribe;
    try {
      const querytrips = query(
        tripCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
      unsubscribe = onSnapshot(querytrips, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
        });
        setTrips(docs);
      });
    } catch (error) {
      console.error(error);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getTrips();
  }, []);
  return { trips };
};
