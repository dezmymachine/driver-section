import { useGetUserTrips } from "../hooks/useGetUserTrips";
import { Typography, Container, Card, Grid, Button, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import NavBottom from "../components/NavBottom";

const Trips = () => {
  const navigate = useNavigate();
  const { trips } = useGetUserTrips();

  const handleNav = () => {
    navigate("/confirm");
  };

  return (
    <Container>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Détails de votre trajet
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Montrez comment se déroulent les ramassages.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {trips.map((trip, index) => {
          return (
            <Grid item xs={6} key={trip.id}>
              <Card
                sx={{ background: "#001023", color: "white", padding: "1rem" }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  Ramassage {index + 1}
                </Typography>
                <Typography>{trip.pointdedepot}</Typography>
                <CircleIcon sx={{ color: "white" }} />
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Button
        variant="contained"
        fullWidth
        onClick={handleNav}
        sx={{
          textTransform: "none",
          background: "#001023",
          padding: "0.5rem",
          marginTop: "1rem",
          "&:hover": { background: "#001023" },
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          Course terminée
        </Typography>
      </Button>
      <NavBottom />
    </Container>
  );
};

export default Trips;
