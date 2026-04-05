const waves = [];

document.querySelectorAll("wave").forEach(wave => {
  const text = wave.textContent;
  wave.textContent = "";

  const speed = parseFloat(wave.getAttribute("spd")) || 200;
  const strength = parseFloat(wave.getAttribute("str")) || 4;

  const letters = [];

  [...text].forEach((letter, i) => {
    const span = document.createElement("span");

    // Preserve spaces
    span.textContent = letter === " " ? "\u00A0" : letter;

    wave.appendChild(span);
    letters.push(span);
  });

  waves.push({ letters, speed, strength });
});

function animateWave(time) {
  waves.forEach(w => {
    w.letters.forEach((el, i) => {
      const offset = i * 0.65;
      const y = Math.sin(time / w.speed + offset) * w.strength;
      el.style.transform = `translateY(${y}px)`;
    });
  });

  requestAnimationFrame(animateWave);
}

requestAnimationFrame(animateWave);

const lettersArr = [];

document.querySelectorAll("pulse").forEach(pulse => {
  const text = pulse.textContent;
  pulse.textContent = "";

  const speed = parseFloat(pulse.getAttribute("spd")) || 200;
  const strength = parseFloat(pulse.getAttribute("str")) || 0.2;

  const letters = [];

  [...text].forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;

    pulse.appendChild(span);
    letters.push(span);
  });

  lettersArr.push({ letters, speed, strength });
});

function animateLetters(time) {
  lettersArr.forEach(group => {
    group.letters.forEach((el, i) => {
      const offset = i * 0.65;

      const scale = 1 + Math.sin(time / group.speed + offset) * group.strength;
      el.style.transform = `scale(${scale})`;
    });
  });

  requestAnimationFrame(animateLetters);
}

requestAnimationFrame(animateLetters);