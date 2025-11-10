// Matrix rain background (lightweight, responsive)

(function () {
  const canvas = document.getElementById("matrix-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, columns, drops, fontSize;

  // Characters to use in the rain
  const chars =
    "!@#$%^&*()<>''{}|/*-+ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charArr = chars.split("");

  function setupCanvas() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    // font and columns size         
    fontSize = Math.max(10, Math.min(60, Math.floor(width / 100)));
    ctx.font = `${fontSize}px monospace`;

    columns = Math.floor(width / fontSize) + 1;
    drops = new Array(columns).fill(0).map(() => ({
      pos: Math.random() * height / fontSize,
      // speed: 0.1 + (Math.random() * 0.3) // Slightly randomize speed
      speed:(Math.random()) // Slightly randomize speed

    }));
  }

  function draw() {
    // semi-transparent black to create trail effect
    ctx.fillStyle = "rgba(0, 26, 0, 0.16)"; // Changed to dark green background
    ctx.fillRect(0, 0, width, height);

    // Change to bright matrix green for falling characters
    ctx.fillStyle = "#087222ff"; // Classic matrix green
    ctx.textBaseline = "top";

    for (let i = 0; i < columns; i++) {
      const text = charArr[Math.floor(Math.random() * charArr.length)];
      const x = i * fontSize;
      const y = drops[i].pos * fontSize;

      ctx.fillText(text, x, y);

      // reset drop after it goes beyond the screen
      if (y > height && Math.random() > 0.975) {
        drops[i].pos = 0;
      } else {
        drops[i].pos += drops[i].speed; // Use the speed property
      }
    }

    requestAnimationFrame(draw);
  }

  // initialize and handle resize
  function init() {
    setupCanvas();
    draw();
  }

  window.addEventListener("resize", () => {
    // small debounce
    clearTimeout(window._matrix_resize_timeout);
    window._matrix_resize_timeout = setTimeout(() => {
      // need to reset scale for dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      setupCanvas();
    }, 120);
  });

  init();
})();
