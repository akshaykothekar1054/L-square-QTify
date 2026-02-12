import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../components/Section/Section";
import Songs from "../components/Songs/Songs";

const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const top = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      const latest = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );

      setTopAlbums(top.data);
      setNewAlbums(latest.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Section title="Top Albums" data={topAlbums} />
      <Section title="New Albums" data={newAlbums} />
      <Songs />
    </>
  );
};

export default Home;
