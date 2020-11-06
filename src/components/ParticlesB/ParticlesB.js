import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './ParticlesB.css';

class ParticlesB extends Component {
  render() {
    return (
      <div>
        <Particles className='particles'
          params={{
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 7
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.2,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 130,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 150,
                  "line_linked": {
                    "opacity": 1,
                    "color": "#ff7373"
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
      </div>
    )
  }
}

export default ParticlesB; 
