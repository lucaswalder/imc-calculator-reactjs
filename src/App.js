import './style-app.css'
import React from 'react'

export default function App() {

  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [message, setMessage] = React.useState('');

  function calcImc() {
    const hei = height / 100;
    const imc = weight / (hei * hei);
    const imcFormated =  imc.toFixed(2);
    
    if(imcFormated <= 18.5) {
      setMessage(`Peso baixo seu imc é ${imcFormated}` )
    } else if (imcFormated >= 18.6 && imcFormated <= 24.9) {
      setMessage(`Peso normal, seuIMC é ${imcFormated}` )
    } else if (imcFormated >= 25 && imcFormated <= 29.9) {
      setMessage(`Sobrepeso, seu IMC é ${imcFormated}` )
    } else if (imcFormated >= 30 && imcFormated <= 34.9) {
      setMessage(`Obesidade Grau 1, seu IMC é ${imcFormated}` )
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC </span>
      <input type="text"
      className="area-input"
      placeholder="Peso em (kg)"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      />

      <input type="text"
      className="area-input"
      placeholder="Altura em (cm)"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calcImc}>Calcular</button>
      <h2>{message}</h2>
    </div>
  )
}

