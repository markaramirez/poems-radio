import React from 'react';
import MusicPlayer from 'react-responsive-music-player';
import './App.css';
import Navbar from './Navbar.js'
import $ from 'jquery';

function App() {

  var jtext;
  var url2 = "https://s3.amazonaws.com/robot-poetry-test-bucket/playlist.json";
  $.ajax({
    async: false,
    type: 'POST',
    dataType: 'jsonp',
    url: 'https://s3.amazonaws.com/robot-poetry-test-bucket/playlist.json',
    success: function(data) {
      console.log("here first")
      console.log(data)
      jtext=data;
    }
  });

  $.ajax({
    async: false,
    type: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/' + 'https://s3.amazonaws.com/robot-poetry-test-bucket/playlist.json',
    success: function(data) {
      console.log("here two")
      console.log(data)
      jtext=data;
    }
  });

  $.getJSON(url2, function(result){
    console.log("here three")
    console.log(result)
  });

  console.log("here is the json data:")
  console.log(jtext)
  var playlist = jtext;

  return (
    <div className="App">
      <Navbar />
      <div className="poemblurb">
        <h1>Listen to poems read to you by a robot.</h1>
        <br/>
      </div>
      <div className="Music-player"><MusicPlayer playlist={playlist}/></div>    
    </div>
  );
}

export default App;
