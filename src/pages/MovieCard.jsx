import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

export default function MediaCard({ movie }) {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(100);
  const { currentUser } = useContext(AuthContext);
  return (
    <Card
      onClick={() => {
        navigate("/details/" + movie.id);
        !currentUser && toastWarnNotify("Please log in to see detail");
      }}
      sx={{
        minWidth: 320,
        minHeight: 400,
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsShown(0)}
      onMouseLeave={() => setIsShown(100)}
    >
      <CardMedia
        sx={{ maxWidth: "320px", height: "100%", objectFit: "cover" }}
        component="img"
        image={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
        alt={movie.title}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${isShown}%`,
          backgroundColor: "rgba(0,0,0,.6)",
          height: "100%",
          boxSizing: "border-box",
          padding: "3rem 0",
        }}
      >
        <Typography
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "yellow",
            whiteSpace: "pre-line",
            marginBottom: "16px",
          }}
        >
          {movie.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-wrap",
            color: "white",
          }}
        >
          {movie.overview}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            bottom: "0",
            left: `0`,
            color: "yellow",
          }}
        >
          {movie.vote_average}
        </Typography>
      </div>
      {/* {isShown && (
        
      )} */}
    </Card>
  );
}
