import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState("all");

  // Fetch songs
  const fetchSongs = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setSongs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch genres
  const fetchGenres = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );

      // Add All manually
      setGenres([{ key: "all", label: "All" }, ...res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchGenres();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter logic
  const filteredSongs =
    value === "all"
      ? songs
      : songs.filter((song) => song.genre.key === value);

  return (
    <div>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: { backgroundColor: "#34C94B" },
        }}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
          />
        ))}
      </Tabs>

      {/* Section */}
      <Section
        title="Songs"
        data={filteredSongs}
        isSongSection={true}
      />
    </div>
  );
};

export default Songs;
