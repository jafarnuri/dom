window.onload = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let Bgcolor = document.getElementById("bgcolor");

  Bgcolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
setInterval(
  (window.onload = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let Bgcolor = document.getElementById("bgcolor");

    Bgcolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }),
  200
);
