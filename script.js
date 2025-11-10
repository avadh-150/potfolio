/* ===== Particle.js Configuration ===== */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: ["#00ffff", "#0077ff", "#33ccff"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.2,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#00ffff",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
});


// Typing animation
const typingText = document.getElementById("typing-text");
const texts = [
"Hacker",
"Red Team Operator",
"Offensive Security Enthusiast",
"Ethical Hacker",
"Cybersecurity Professional",
"Penetration Tester",
"CTF Player & Learner",
"Creative Security Researcher"
];


let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
      // hide on focus of inputs by toggling a class (more reliable)
      window.addEventListener('focusin', (e) => {
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
          cursorWrap.classList.add('cursor-hidden');
        }
      });
      window.addEventListener('focusout', (e) => {
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
          // small delay to avoid flicker when switching elements quickly
          setTimeout(() => cursorWrap.classList.remove('cursor-hidden'), 10);
        }
      });
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Rotating Cyber Quotes/Fun Facts
const cyberQuotes = [
  '"The quieter you become, the more you are able to hear." – Kali Linux',
  "Did you know? The first computer virus was created in 1971 and called the Creeper.",
  '"Amateurs hack systems, professionals hack people." – Bruce Schneier',
  'Fun fact: The word "hacker" originally meant someone who makes furniture with an axe.',
  '"Security is not a product, but a process." – Bruce Schneier',
  "Did you know? The world’s first website is still online: info.cern.ch",
  '"There is no patch for human stupidity." – Kevin Mitnick',
  'Fun fact: The @ symbol in emails is called an "arroba" in Spanish and Portuguese.',
  'Did you know? The term "bug" in computing came from a real moth found in a computer in 1947.',
  '"To confound the enemy, you must first understand them." – Sun Tzu (applied to cyber)',
  "Fun fact: The strongest passwords are long, random, and unique for every site.",
  "Did you know? The first spam email was sent in 1978 to 393 people.",
  '"The best way to predict the future is to invent it." – Alan Kay',
  "Fun fact: Social engineering is one of the most common ways hackers gain access.",
  "Did you know? The world’s largest DDoS attack exceeded 2.5 Tbps in 2021.",
  '"Hacking is not about breaking and entering. It’s about curiosity, exploration, and learning."',
  'Fun fact: The word "phishing" comes from "fishing" for information with fake bait.',
];
let quoteIndex = 0;
function showNextQuote() {
  const quoteText = document.getElementById("cyber-quote-text");
  quoteText.textContent = cyberQuotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % cyberQuotes.length;
}
showNextQuote();
setInterval(showNextQuote, 6000);

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(this);

    // Send form data to Formspree
    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        showPopup(); // cyber popup
        document.getElementById("contact-form").reset();
      })

      .catch((error) => {
        console.error("Error:", error);
        // Show error message using SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  });

function showPopup(isError = false) {
  playCyberSound();
  const popup = document.getElementById("cyber-popup");
  const popupContent = popup.querySelector(".relative");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const icon = popup.querySelector(".fas");

  if (isError) {
    popupTitle.textContent = "> ERROR_DETECTED";
    popupMessage.textContent = "> MESSAGE_STATUS: FAILED";
    popupTitle.classList.add("text-red-400");
    popupContent.classList.add("border-red-500/30");
    icon.classList.remove("fa-terminal");
    icon.classList.add("fa-exclamation-triangle");
  } else {
    popupTitle.textContent = "> TRANSMISSION_RECEIVED";
    popupMessage.textContent = "> MESSAGE_STATUS: DELIVERED";
    popupTitle.classList.remove("text-red-400");
    popupContent.classList.remove("border-red-500/30");
    icon.classList.remove("fa-exclamation-triangle");
    icon.classList.add("fa-terminal");
  }

  popup.classList.remove("hidden");
  setTimeout(() => {
    popupContent.classList.remove("scale-95", "opacity-0");
    popupContent.classList.add("scale-100", "opacity-100");
  }, 10);

  setTimeout(closePopup, 4000);
}

function closePopup() {
  const popup = document.getElementById("cyber-popup");
  const popupContent = popup.querySelector(".relative");

  popupContent.classList.remove("scale-100", "opacity-100");
  popupContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    }
  });
});

// Initialize typing animation
typeWriter();

// Custom cursor follower
(function () {
  const cursorWrap = document.getElementById('custom-cursor');
  if (!cursorWrap) return;

  const outer = cursorWrap.querySelector('.cursor-outer');
  const inner = cursorWrap.querySelector('.cursor-inner');
  const tail = cursorWrap.querySelector('.cursor-tail');

  // create tail dots
  const TAIL_DOTS = 6;
  const tailDots = [];
  for (let i = 0; i < TAIL_DOTS; i++) {
    const el = document.createElement('span');
    el.style.opacity = '0';
    tail.appendChild(el);
    tailDots.push(el);
  }

  // state
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let outerX = mouseX, outerY = mouseY;
  let innerX = mouseX, innerY = mouseY;
  const OUTER_LERP = 0.12;
  const INNER_LERP = 0.35;

  // tail positions array
  const tailState = tailDots.map(() => ({ x: mouseX, y: mouseY, a: 0 }));

  // touch check
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  if (isTouch) {
    cursorWrap.classList.add('cursor-hidden');
    return;
  }

  // mouse move
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // ensure visible
    outer.style.opacity = '1';
    inner.style.opacity = '1';
  }, { passive: true });

  // hide when leaving window
  window.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
      outer.style.opacity = '0'; inner.style.opacity = '0';
      tailDots.forEach(d => d.style.opacity = '0');
    }
  });

  window.addEventListener('mouseover', () => { outer.style.opacity = '1'; inner.style.opacity = '1'; });

  // hide on focus of inputs using class toggles
  window.addEventListener('focusin', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
      cursorWrap.classList.add('cursor-hidden');
    }
  });
  window.addEventListener('focusout', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) {
      setTimeout(() => cursorWrap.classList.remove('cursor-hidden'), 10);
    }
  });

  // main loop
  function loop() {
    // lerp outer and inner
    outerX += (mouseX - outerX) * OUTER_LERP;
    outerY += (mouseY - outerY) * OUTER_LERP;
    innerX += (mouseX - innerX) * INNER_LERP;
    innerY += (mouseY - innerY) * INNER_LERP;

    outer.style.left = outerX + 'px';
    outer.style.top = outerY + 'px';
    inner.style.left = innerX + 'px';
    inner.style.top = innerY + 'px';

    // tail follow: each dot follows previous point
    let prevX = mouseX, prevY = mouseY;
    for (let i = 0; i < tailState.length; i++) {
      tailState[i].x += (prevX - tailState[i].x) * (0.16 + i * 0.02);
      tailState[i].y += (prevY - tailState[i].y) * (0.16 + i * 0.02);
      tailState[i].a = Math.max(0.06, 1 - i * 0.16);
      const el = tailDots[i];
      el.style.left = tailState[i].x + 'px';
      el.style.top = tailState[i].y + 'px';
      el.style.opacity = String(tailState[i].a);
      el.style.transform = 'translate(-50%,-50%) scale(' + (1 - i * 0.08) + ')';
      prevX = tailState[i].x; prevY = tailState[i].y;
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  // optional: toggle with 'c' (class toggle)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'c' || e.key === 'C') {
      cursorWrap.classList.toggle('cursor-hidden');
    }
  });
})();

// pop-up animation js

function playCyberSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  // Oscillators (layered cyber vibe)
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const osc3 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.type = "square";
  osc2.type = "sawtooth";
  osc3.type = "sine";

  const now = ctx.currentTime;
  const duration = 1.4; // longer duration for lingering feel

  // Rising cyber sweep
  osc1.frequency.setValueAtTime(200, now);
  osc1.frequency.exponentialRampToValueAtTime(1100, now + 1.0);
  osc2.frequency.setValueAtTime(300, now);
  osc2.frequency.exponentialRampToValueAtTime(1500, now + 1.0);
  osc3.frequency.setValueAtTime(400, now);
  osc3.frequency.exponentialRampToValueAtTime(1800, now + 1.0);

  // Volume curve
  gain.gain.setValueAtTime(0.2, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  // Connect to output
  osc1.connect(gain);
  osc2.connect(gain);
  osc3.connect(gain);
  gain.connect(ctx.destination);

  // Start and stop
  osc1.start();
  osc2.start();
  osc3.start();
  osc1.stop(now + duration);
  osc2.stop(now + duration);
  osc3.stop(now + duration);

  // Small echo blip
  setTimeout(() => {
    const echo = ctx.createOscillator();
    const echoGain = ctx.createGain();
    echo.type = "triangle";
    echo.frequency.setValueAtTime(880, ctx.currentTime);
    echoGain.gain.setValueAtTime(0.1, ctx.currentTime);
    echoGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    echo.connect(echoGain);
    echoGain.connect(ctx.destination);
    echo.start();
    echo.stop(ctx.currentTime + 0.6);
  }, 700);
}

// --- Enhanced card interactivity & binary rain for cyber-card ---
(function () {
  // Create binary rain lines inside each binary-rain container
  function makeBinaryLine(len = 60) {
    const pool = '01';
    let s = '';
    for (let i = 0; i < len; i++) s += pool[Math.floor(Math.random() * pool.length)];
    return s;
  }

  function initBinaryRain() {
    document.querySelectorAll('.binary-rain').forEach((el) => {
      // clear existing
      el.innerHTML = '';
      for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        span.textContent = makeBinaryLine(64 - i * 6);
        el.appendChild(span);
      }

      // rotate content periodically for subtle change
      setInterval(() => {
        el.querySelectorAll('span').forEach((s) => {
          s.textContent = makeBinaryLine(40 + Math.floor(Math.random() * 40));
        });
      }, 7000 + Math.floor(Math.random() * 6000));
    });
  }

  // Card tilt on mouse move
  function initCardTilt() {
    const cards = document.querySelectorAll('.cyber-card');
    cards.forEach((card) => {
      const rect = () => card.getBoundingClientRect();
      function onMove(e) {
        const r = rect();
        const x = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
        const y = (e.clientY - r.top) / r.height - 0.5;
        const rx = (y) * 8; // tilt x
        const ry = -(x) * 12; // tilt y
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }
      function reset() { card.style.transform = ''; }
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', reset);
      // touch fallback: small scale on touch
      card.addEventListener('touchstart', () => (card.style.transform = 'scale(1.01)'));
      card.addEventListener('touchend', () => (card.style.transform = ''));
    });
  }

  // Entrance animation using IntersectionObserver
  function initEntranceObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('.cyber-card').forEach((c) => observer.observe(c));
  }

  // Initialize when DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initBinaryRain();
    initCardTilt();
    initEntranceObserver();
    initTerminal();
    initOpenInNewTab();
  });
  // Instead of an in-page lightbox, open images in a new browser tab/window
  function initOpenInNewTab() {
    // Click handler: open image URL in a new tab
    document.addEventListener('click', (ev) => {
      const target = ev.target;
      if (!target) return;
      if (target.matches('.collab-card img, .cert-img, img.cert-thumb')) {
        ev.preventDefault();
        const href = target.getAttribute('data-large') || target.src;
        if (href) window.open(href, '_blank', 'noopener');
      }
    });

    // Keyboard activation: Enter or Space opens the image URL in a new tab when focused
    document.addEventListener('keydown', (ev) => {
      const target = document.activeElement;
      if (!target) return;
      if (target.matches && target.matches('.collab-card img, .cert-img, img.cert-thumb')) {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          const href = target.getAttribute('data-large') || target.src;
          if (href) window.open(href, '_blank', 'noopener');
        }
      }
    });
  }
  
  // Interactive terminal implementation
  function initTerminal() {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    if (!output || !input) return;

    const name = 'Avadh Radadiya';
    const title = 'cybersecurity enthusiast';
    const email = 'avadhradadiya43@proton.me';
    const projects = [
      { name: 'Enterprise Network', url: 'https://github.com/avadh-150/Multi-floor-Enterprise-Design-Network' },
      // { name: 'RedHawk', url: 'https://github.com/Vasoyasharan/RedHawk' },
      // { name: 'CyberLock', url: 'https://vasoyasharan.github.io/PasswordStrengthMeter/' },
    ];

    input.setAttribute('data-placeholder', 'Type a command (help)');

    let history = [];
    let historyIndex = -1;

    function printLine(text, opts = {}) {
      const line = document.createElement('div');
      line.className = 'out-line';
      if (opts.html) line.innerHTML = text;
      else line.textContent = text;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }

    function runCommand(raw) {
      const cmd = raw.trim();
      const lower = cmd.toLowerCase();
      // echo command
      printLine(`$ ${cmd}`);

      switch (lower) {
        case 'help':
          printLine('Available commands: help, whoami, projects, contact, clear');
          printLine("Tip: use ↑/↓ to navigate command history");
          break;
        case 'whoami':
          printLine(`${name} — ${title}`);
          break;
        case 'projects':
          projects.forEach((p) => {
            printLine(`${p.name} — ${p.url}`);
          });
          break;
        case 'contact':
          printLine(`Email: ${email}`);
          printLine('Or use the contact form on this page.');
          break;
        case 'clear':
          output.innerHTML = '';
          break;
        default:
          if (lower.startsWith('open ')) {
            const target = raw.split(' ').slice(1).join(' ');
            const found = projects.find(p => p.name.toLowerCase() === target.toLowerCase());
            if (found) {
              printLine(`Opening ${found.name} — ${found.url}`);
              window.open(found.url, '_blank');
            } else {
              printLine(`No matching project: ${target}`);
            }
          } else {
            printLine(`${cmd}: command not found`);
          }
      }
    }

    // keyboard handling
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const raw = input.innerText || '';
        if (raw.trim() === '') return;
        history.push(raw);
        historyIndex = history.length;
        runCommand(raw);
        input.innerText = '';
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (history.length === 0) return;
        historyIndex = Math.max(0, historyIndex - 1);
        input.innerText = history[historyIndex] || '';
        placeCaretAtEnd(input);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (history.length === 0) return;
        historyIndex = Math.min(history.length, historyIndex + 1);
        input.innerText = history[historyIndex] || '';
        placeCaretAtEnd(input);
      }
    });

    // focus behavior: focus input when clicking terminal
    document.querySelectorAll('.terminal-window, .terminal-output').forEach(el => {
      el.addEventListener('click', () => input.focus());
    });

    // helper to place caret
    function placeCaretAtEnd(el) {
      el.focus();
      if (typeof window.getSelection != 'undefined' && typeof document.createRange != 'undefined') {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }

    // initial welcome
    printLine('Welcome to the interactive profile terminal. Type "help" for commands.');
    input.focus();
  }
})();
