//SETTINGS  particles-js-canvas-el
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 1.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
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
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 240,
                "line_linked": {
                    "opacity": 0.1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 3,
                "duration": 2,
                "opacity": 10,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.3
            },
            "push": {
                "particles_nb": 1
            },
            "remove": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
});