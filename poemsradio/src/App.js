import React from 'react';
import MusicPlayer from 'react-responsive-music-player';
import './App.css';
import Navbar from './Navbar.js'

function App() {
  const playlist = [
    {
      "url": "../clairo.mp3",
      "cover": "../musicnote.png",
      "title": "Hot Cheetos instrumental",
      "artist": [
        "Clairo"
      ]
    },
    {
      "url": "src/rejjie.mp3",
      "cover": "src/musicnote.png",
      "title": "Oh No instrumental",
      "artist": [
        "Rejjie Snow"
      ]
    }
  ]
  return (
    <div className="App">
      <Navbar />
      <MusicPlayer playlist={playlist}/>
    </div>
  );
}

export default App;
