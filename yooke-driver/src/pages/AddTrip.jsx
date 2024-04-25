import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAddTrip } from "../hooks/useAddTrip";
const AddTrip = () => {
  const { addTrip } = useAddTrip();
  const [pointdeprise, setpointdeprise] = useState("");
  const [pointdedepot, setpointdedepot] = useState("");
  const [date, setDate] = useState("");
  const [heure, setheure] = useState("");
  const [typedetrajet, settypedetrajet] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip({
      pointdeprise,
      pointdedepot,
      date,
      heure,
      typedetrajet,
    });
    navigate("/trips");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4"
    >
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-white mb-4">
        Destination prochaine
      </h2>

      <FormControl fullWidth margin="normal">
        <FormLabel>Point de Prise en Charge</FormLabel>
        <Select
          labelId="pickup-location-label"
          id="pickup-location"
          value={pointdeprise}
          onChange={(e) => setpointdeprise(e.target.value)}
        >
          <MenuItem value="">Point de Prise en Charge</MenuItem>
          <MenuItem value="Carrefour Mendong">Carrefour Mendong</MenuItem>
          <MenuItem value="Montée Jouvence">Montée Jouvence</MenuItem>
          <MenuItem value="Sous-préfecture Efoulan">
            Sous-préfecture Efoulan
          </MenuItem>
          <MenuItem value="Club France">Club France</MenuItem>
          <MenuItem value="Avenue des Banques">Avenue des Banques</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormLabel>Point de Dépôt</FormLabel>
        <Select
          labelId="pointdeprise-label"
          id="pointdeprise"
          value={pointdedepot}
          onChange={(e) => setpointdedepot(e.target.value)}
        >
          <MenuItem value="">Point de Dépôt</MenuItem>
          <MenuItem value="Avenue des banques">Avenue des banques</MenuItem>
          <MenuItem value="Montée Jouvence">Montée Jouvence</MenuItem>
          <MenuItem value="Sous-préfecture Efoulan">
            Sous-préfecture Efoulan
          </MenuItem>
          <MenuItem value="Club France">Club France</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormLabel sx={{ marginBottom: "1rem" }}>
          Sélectionnez la Date Depart{" "}
        </FormLabel>
        <TextField
          id="date"
          label="Date of Departure"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormLabel sx={{ marginBottom: "1rem" }}>
          Sélectionnez l&apos;heure du Départ
        </FormLabel>
        <TextField
          id="heure"
          label="heure of Departure"
          type="time"
          value={heure}
          onChange={(e) => setheure(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <FormLabel sx={{ marginBottom: "1rem" }}>Type de trajet</FormLabel>
        <Select
          labelId="ride-type-label"
          id="ride-type"
          value={typedetrajet}
          onChange={(e) => settypedetrajet(e.target.value)}
        >
          <MenuItem value="">Sélectionnez type de trajet</MenuItem>
          <MenuItem value="single">Solo</MenuItem>
          <MenuItem value="double">Double</MenuItem>
          <MenuItem value="triple">Trio</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{ padding: "1rem", background: "#001023" }}
      >
        Je crée le trajet
      </Button>
    </form>
  );
};

export default AddTrip;
