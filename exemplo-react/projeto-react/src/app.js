import React, { useState, useEffect } from "react";
import "./app.css";

export default function App() {
  return <p>Esta é o texto do App</p>;
}

export function Imagens(props) {
  return (
    <div>
      <p>Imagem aleatoria</p>
      <img src={props.img} alt={props.alt} height="250px" width="250px" />
    </div>
  );
}

export function Gif(props) {
  const [gif, setGif] = useState("");

  return (
    <div>
      <p>Gif do Shrek PQ SIM!</p>
      <img
        src="https://c.tenor.com/2DUe7YvHqmsAAAAd/shrek-zombie.gif"
        alt="Shrek Doido"
        width="400px"
      />
      <br />
      <p id="frase">QUER MAIS UM?</p>
      <img id="gif" src={props.gif} alt={props.altGif} />
      <button
        id="button"
        onClick={() =>
          setGif(
            (document.getElementById("gif").style.display = "block"),
            setGif((document.getElementById("button").style.display = "none"))
          )
        }
      >
        {props.botaoGif}
      </button>
    </div>
  );
}
