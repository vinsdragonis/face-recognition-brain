import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecgonition from './components/FaceRecgonition/FaceRecgonition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd7a1e00a024a4344ac26a4ab52bd9593'
});

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }
  
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .catch((err) => {
        //console.log(err);
      });
  }
  
  render () {
    return (
      <div className="App">
        <Particles className="particles"
          params={ particlesOptions }
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={ this.onInputChange }
          onButtonSubmit={ this.onButtonSubmit }
        />
        <FaceRecgonition imageUrl={ this.state.imageUrl } />
      </div>
    );
  }
}

export default App;
