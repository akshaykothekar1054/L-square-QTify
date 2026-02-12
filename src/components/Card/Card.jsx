import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, follows, title, likes, isSong }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.bottom}>
        <Chip
  label={
    isSong
      ? `${likes} Likes`
      : `${follows} Follows`
  }
/>

      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
