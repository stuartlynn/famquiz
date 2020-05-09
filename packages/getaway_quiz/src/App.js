import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Race from './Components/Race/Race';

function App() {
  const players = [
    {
      name: "Stuart and Nicole",
      icon: "https://random.dog/c814f405-4bf3-40ac-a7a3-7adbf5ef8703.jpg",
      position: Math.floor(Math.random() * 10)
    },
    {
      name: "Anne and Nick",
      icon: "https://random.dog/9ff0ffc6-f6f0-4d7a-80c2-5df0ac437d5e.JPG",
      position: Math.floor(Math.random() * 10)
    },
    {
      name: "Craig and Annie",
      icon: "https://random.dog/914e15e9-ddf2-4b7a-b380-0aa9ff7458e7.PNG",
      position: Math.floor(Math.random() * 10)
    },
    {
      name: "Aileen and Luke",
      icon: "https://random.dog/c1efdc4c-5691-4823-9e66-fd9eeab3ce96.jpg",
      position: Math.floor(Math.random() * 10)
    },
  ]
  return (
    <div className="App">
      <Race players={players} />

    </div>
  );
}

export default App;
