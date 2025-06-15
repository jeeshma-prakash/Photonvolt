gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".lead", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power4.out"
});

gsap.registerPlugin(ScrollTrigger);

// Animate each card when it enters the viewport
gsap.utils.toArray('.card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",   // Starts when top of card hits 85% of viewport
      toggleActions: "play none none none", // Play only once
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: index * 0.1
  });
});

// Animate section title when it scrolls into view
gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 2.5,
  ease: "power4.out"
});

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".illustration-img", {
    scrollTrigger: {
      trigger: ".illustration-img",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  });

 gsap.registerPlugin(ScrollTrigger);

  // Heading animation (top to down)
  gsap.from(".animate-top", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 85%",
    }
  });

  // Cards animation (bottom to top)
  gsap.from(".animate-up", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 85%",
    }
  });


  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".animate-left", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#why-choose-us",
      start: "top 80%"
    }
  });

  gsap.from(".animate-right", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#why-choose-us",
      start: "top 80%"
    }
  });


// In your script.js
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(0, 64, 92, 0.95)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const navlinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
    menuOpenButton.style.display = "none"; // ✅ hide hamburger
  });

  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
    menuOpenButton.style.display = "block"; // ✅ show hamburger again
  });

  navlinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
      menuOpenButton.style.display = "block"; // ✅ show hamburger again
    });
  });
});


  gsap.registerPlugin(ScrollTrigger);

    let counted = false;

    ScrollTrigger.create({
      trigger: "#counter-section",
      start: "top 85%",
      onEnter: () => {
        if (!counted) {
          counted = true;
          let count = 0;
          const target = 17;
          const counter = document.getElementById("counter");

          const interval = setInterval(() => {
            if (count >= target) {
              counter.textContent = target + "+";
              clearInterval(interval);
            } else {
              counter.textContent = count + "+";
              count++;
            }
          }, 200);
        }
      }
    });


      const counters = document.querySelectorAll('.num');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + (target >= 100 ? '+' : '');
        }
      };

      updateCount();
    });

    // service html

    const stats = document.querySelectorAll('.stat-count');
stats.forEach(stat => {
  const updateCount = () => {
    const target = +stat.getAttribute('data-target');
    const count = +stat.innerText;
    const increment = target / 100;

    if (count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      stat.innerText = target + (target >= 100 ? '+' : '');
    }
  };
  updateCount();
});

// about section

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = document.querySelectorAll(".progress-bar");
          bars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth;
          });
          observer.disconnect();
        }
      });
    });

    observer.observe(document.querySelector(".progress-bar"));
  });