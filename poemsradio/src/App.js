import React from 'react';
import MusicPlayer from 'react-responsive-music-player';
import './App.css';
import Navbar from './Navbar.js'
import $ from 'jquery';
import { Jumbotron} from 'reactstrap';

function App() {

  var jtext;

  $.ajax({
    async: false,
    type: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/' + 'https://s3.amazonaws.com/robot-poetry-test-bucket/playlist.json',
    success: function(data) {
      jtext=data;
    }
  });

  var playlist = jtext;

  return (
    <div className="App">
      <Navbar />
      <div className="poemblurb">
          <h1>Listen to poems read to you by a robot.</h1>
        <br/>
      </div>
      <Jumbotron>
        <div className="Music-player"><MusicPlayer playlist={playlist} /></div>
      </Jumbotron>
      <Jumbotron>
        <p>The poems read here are all public domain and are being read to you by <a href="https://aws.amazon.com/polly/">Amazon Polly.</a></p>
        <p>This web app was built with the help of <a href="https://www.npmjs.com/package/react-responsive-music-player">this music player.</a></p>
      </Jumbotron>
    </div>
  );
}

export default App;
