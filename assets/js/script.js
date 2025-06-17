

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
    gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
  trigger: ".journey-section", // your stats section container
  start: "top 80%",
  once: true, // only run once
  onEnter: () => {
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
  }
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