const btn = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['red', 'violet', 'lime', 'purple', 'cyan'];

body.style.backgroundColor = 'Pink';

btn.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
});
