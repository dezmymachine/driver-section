import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite"; // Import necessary functions

export const saveTripData = async (db, userId, tripData) => {
  // Inject Firestore instance (db)
  try {
    const tripRef = await addDoc(collection(db, "trips"), {
      // Use addDoc() with collection reference
      ...tripData,
      userId,
    });
    console.log("Trip data saved with ID:", tripRef.id); // Log the generated ID
  } catch (error) {
    console.error("Error saving trip data:", error);
    throw error; // Re-throw the error
  }
};

export const fetchUserTripData = async (db, userId) => {
  // Inject Firestore instance (db)
  try {
    const tripQuery = query(
      collection(db, "trips"),
      where("userId", "==", userId)
    ); // Build a query
    const querySnapshot = await getDocs(tripQuery); // Use getDocs() for fetching data
    const tripDataDocs = querySnapshot.docs.map((doc) => doc.data());
    return tripDataDocs;
  } catch (error) {
    console.error("Error fetching trip data:", error);
    throw error; // Re-throw the error
  }
};
