const box = document.getElementById('box');
const content = document.getElementById('content');
let opened = false;

box.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    box.classList.add('open');
    
    setTimeout(() => {
        content.innerHTML = `
            <h2>Давай дружить и не ссориться</h2>
            <p>Ты для меня очень дорогая, и я правда не хочу с тобой ссориться. ✨</p>
        `;
        startEmojiRain();
    }, 500);
});

function startEmojiRain() {
    const generalEmojis = ['✨', '🤝', '😊', '⭐', '☁️', '🎉', '🌟', '🍀', '🌼', '😃'];
    const heartEmojis = ['❤️', '💖', '💕'];
    
    const timer = setInterval(() => {
        const e = document.createElement('div');
        e.className = 'emoji';
        e.innerHTML = Math.random() < 0.1 
            ? heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
            : generalEmojis[Math.floor(Math.random() * generalEmojis.length)];

        e.style.left = Math.random() * 100 + 'vw';
        e.style.fontSize = (Math.random() * 20 + 15) + 'px';
        e.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 5000);
    }, 30);
    
    setTimeout(() => clearInterval(timer), 20000);
}
