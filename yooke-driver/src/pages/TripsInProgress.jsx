import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Divider from "@mui/material/Divider";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Avatar from "@mui/material/Avatar";

import PaymentsIcon from "@mui/icons-material/Payments";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useNavigate } from "react-router-dom";
import { useGetUserTrips } from "../hooks/useGetUserTrips";
import { Typography, Container, Card, Grid, Box } from "@mui/material";

const TripsInProgress = () => {
  const { trips } = useGetUserTrips();
  const navigate = useNavigate();
  const handleNav = () => {
    useNavigate("/confirm");
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ArrowBackIosIcon />
        <Typography variant="h5">Détails de votre trajet</Typography>
      </Box>
      <Box>
        {trips.map((trip) => {
          return (
            <>
              <Box key={trip.id} sx={{ display: "flex", gap: "1rem" }}>
                <LocalTaxiIcon />
                <Typography>{trip.date} à</Typography>
                <Typography>{trip.heure}</Typography>
              </Box>
              <Container>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <CircleOutlinedIcon />
                  <Typography>{trip.pointdeprise}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <CircleOutlinedIcon />
                  <Typography>{trip.pointdedepot}</Typography>
                </Box>
              </Container>
            </>
          );
        })}
        <LocalTaxiIcon />
      </Box>
    </Container>
  );
};

export default TripsInProgress;
