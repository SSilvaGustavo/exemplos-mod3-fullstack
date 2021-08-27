import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App, { Gif, Imagens } from "./app";
import "./index.css";

export default function Home() {
  return <h1>Meu primeiro React</h1>;
}

export function Texto(props) {
  return <p>{props.texto}</p>;
}

export function Paragrafo() {
  return (
    <div>
      <Texto texto="Texto" />
      <Texto texto="Outro Texto" />
      <Texto texto="Texto seguinte" />
      <Texto texto="Teste de props" />
    </div>
  );
}

export function Botao(props) {
  const [botao, setBotao] = useState(0);

  useEffect(() => {
    document.title = botao;
  }, [botao]);
  return (
    <div>
      <p>Contagem de Clicks: {botao}</p>
      <button onClick={() => setBotao(botao + 1)}>{props.nome}</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Paragrafo />
    <Botao nome="Acumular" />
    <App />
    <Imagens
      img="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"
      alt="Leao"
    />
    <Gif
      gif="https://www.icegif.com/wp-content/uploads/shrek-icegif.gif"
      alt="Shrek"
      botaoGif="ENTAO TOMA!"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
