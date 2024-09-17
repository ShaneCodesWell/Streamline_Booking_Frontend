// Fetch posts using fetch API
fetch("http://cpv2api.com/posts/published/j-w-v")
  .then((response) => response.json())
  .then((resp) => {
    if (resp.success) {
      const postsContainer = document.querySelector('.posts ul');
      resp.data.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `<a target="_blank" href="${post.link}">${post.title} <span>${post.views} views</span></a>`;
        postsContainer.appendChild(li);
      });
    }
  });

fetch("https://cpv2api.com/pens/showcase/j-w-v")
  .then((response) => response.json())
  .then((resp) => {
    if (resp.success) {
      const pensContainer = document.querySelector('.pens ul');
      resp.data.slice(0, 5).forEach((pen) => {
        const li = document.createElement('li');
        li.innerHTML = `<a target="_blank" href="${pen.link}">${pen.title} <span>${pen.views} views</span></a>`;
        pensContainer.appendChild(li);
      });
    }
  });

// Initialize particles.js for particle animations
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 33,
      "density": {
        "enable": true,
        "value_area": 1420.4657549380909
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.063,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 11.83,
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
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
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
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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
});
