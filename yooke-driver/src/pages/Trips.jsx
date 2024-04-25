import React from "react";
import { useGetUserTrips } from "../hooks/useGetUserTrips";

const Trips = () => {
  const { trips } = useGetUserTrips();
  return (
    <div>
      <ul>
        {trips.map((trip, index) => {
          return (
            <li key={trip.id}>
              <p>Ramassage {index + 1} </p>
              <h4>{trip.pointdedepot}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trips;
