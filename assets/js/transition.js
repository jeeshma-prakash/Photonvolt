
gsap.registerPlugin(ScrollTrigger);

// Hero Section
gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".hero-lead", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power4.out"
});

// Card Wrapper
gsap.utils.toArray('.card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: index * 0.1
  });
});

// Who We Are Section
gsap.from(".who-title", {
  scrollTrigger: {
    trigger: ".who-title",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1.8,
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

// Service Section
gsap.from(".animate-service-top", {
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

gsap.from(".animate-service-up", {
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

// Why Choose Us Section
gsap.from(".animate-why-left", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#why-choose-us",
    start: "top 80%"
  }
});

gsap.from(".animate-why-right", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#why-choose-us",
    start: "top 80%"
  }
});

// Counter Animation
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


gsap.registerPlugin(ScrollTrigger);



// Animate Testimonial section
gsap.from(".testimonial-section .testimonial-content h6, .testimonial-section .testimonial-content h2", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Animate Partners section
gsap.from(".partners-section h2, .partners-section p, .carousel-container", {
  scrollTrigger: {
    trigger: ".partners-section",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Animate Journey section text and stats
gsap.from(".journey-text p, .journey-text h2, .journey .stat-box", {
  scrollTrigger: {
    trigger: ".journey",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});

// Animate CTA section
gsap.from(".cta-section .cta-content div, .cta-section .cta-content a", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

// about html transitions

gsap.registerPlugin(ScrollTrigger);

const animateSection = (selector, yValue = 50, duration = 1, opacity = 0) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: yValue,
    opacity: opacity,
    duration: duration,
    ease: "power3.out"
  });
};

// Animate each section
animateSection(".hero-banner", 0);
animateSection(".about-section");
animateSection(".counter-section");
animateSection(".experience-section");
animateSection(".specialist");
animateSection(".cta-section");

// contact html

 gsap.registerPlugin(ScrollTrigger);

  gsap.from(".contact-sec .container", {
    scrollTrigger: {
      trigger: ".contact-sec",
      start: "top 85%", // 85% of viewport
      toggleActions: "play none none none", // only play once
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".contact-sec img", {
    scrollTrigger: {
      trigger: ".contact-sec",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".contact-sec .ps-5", {
    scrollTrigger: {
      trigger: ".contact-sec",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

   gsap.registerPlugin(ScrollTrigger);

  gsap.from(".container .row", {
    scrollTrigger: {
      trigger: ".container .row",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".container .col-lg-6:first-child", {
    scrollTrigger: {
      trigger: ".container .row",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".container .col-lg-6:last-child", {
    scrollTrigger: {
      trigger: ".container .row",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

  
  // blogs

  gsap.registerPlugin(ScrollTrigger);

  // Animate subtitle and title from top
  gsap.from(".recent-blog-section .section-subtitle, .recent-blog-section .section-title", {
    scrollTrigger: {
      trigger: ".recent-blog-section",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Animate blog cards from bottom
  gsap.from(".recent-blog-section .blog-card", {
    scrollTrigger: {
      trigger: ".recent-blog-section",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
  });

    gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".blog-content p").forEach((paragraph, i) => {
    gsap.from(paragraph, {
      scrollTrigger: {
        trigger: paragraph,
        start: "top 90%", // Trigger when p is near viewport
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });