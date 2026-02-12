import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({
  title,
  data = [],
  isSongSection = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.section}>
      {/* Header */}
      {title && (
        <div className={styles.header}>
          <h2>{title}</h2>

          {/* Hide Collapse button for Songs */}
          {!isSongSection && (
            <button onClick={toggleCollapse}>
              {isCollapsed ? "Show All" : "Collapse"}
            </button>
          )}
        </div>
      )}

      {/* Rendering Logic */}
      {isSongSection ? (
        /* SONGS SECTION → Always Carousel */
        <Carousel
          data={data}
          renderComponent={(item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              likes={item.likes}
              isSong={true}
            />
          )}
        />
      ) : isCollapsed ? (
        /* ALBUM SECTION → Carousel when collapsed */
        <Carousel
          data={data}
          renderComponent={(item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          )}
        />
      ) : (
        /* ALBUM SECTION → Grid when expanded */
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
