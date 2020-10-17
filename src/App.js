import React from "react";
import "./App.scss";
import { Card } from "./components/Card";
import movies from "./data";
import joker from "../src/images/joker.jpg";
import despicable from "../src/images/despicable-me.jpg";
import thePrestige from "../src/images/the-prestige.jpg";

function App() {
  return (
    <main>
      {movies.map((movie) => {
        let img = joker;
        if (movie.title === "The Prestige") {
          img = thePrestige;
        } else if (movie.title === "Despicable Me") {
          img = despicable;
        }
        return (
          <Card classes="mr" key={movie.id}>
            <Card.Image src={img} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.desc} </Card.Text>
              <Card.Button>{movie.ctaText} </Card.Button>
            </Card.Body>
          </Card>
        );
      })}
    </main>
  );
}

export default App;
