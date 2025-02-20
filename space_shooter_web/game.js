const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');

// Optional: Load assets if you have them
let spaceshipImg, shootSound, explosionSound;
try {
    spaceshipImg = new Image();
    spaceshipImg.src = 'assets/images/spaceship.png';
    shootSound = new Audio('assets/sounds/shoot.wav');
    explosionSound = new Audio('assets/sounds/explosion.wav');
} catch (e) {
    console.log('Assets not found, using fallback graphics');
}

// Game objects
let player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 80,
    width: 50,
    height: 50,
    speed: 5,
    health: 100
};
let bullets = [];
let enemies = [];
let score = 0;
let gameOver = false;

function drawHeading() {
    ctx.fillStyle = 'cyan';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('First Ever Grok-Made Game', canvas.width / 2, 50);
}

function drawPlayer() {
    if (spaceshipImg && spaceshipImg.complete) {
        ctx.drawImage(spaceshipImg, player.x, player.y, player.width, player.height);
    } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y - 20, player.width * (player.health / 100), 10);
}

function drawBullet(bullet) {
    ctx.fillStyle = 'purple';  // Changed from 'yellow' to 'purple'
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, 5, 0, Math.PI * 2);
    ctx.fill();
}

function drawEnemy(enemy) {
    ctx.fillStyle = 'red';
    ctx.fillRect(enemy.x, enemy.y, 40, 40);
}

function spawnEnemy() {
    enemies.push({
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 40,
        height: 40,
        speed: 2 + Math.random() * 2
    });
}

function checkCollision(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y);
}

function update() {
    if (gameOver) {
        gameOverDisplay.classList.remove('hidden');
        finalScoreDisplay.textContent = score;
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw heading at the top
    drawHeading();

    // Player movement
    document.onkeydown = (e) => {
        if (e.key === 'ArrowLeft' && player.x > 0) player.x -= player.speed;
        if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) player.x += player.speed;
        if (e.key === ' ' && !e.repeat) {
            bullets.push({ x: player.x + player.width / 2, y: player.y, radius: 5 });
            if (shootSound) shootSound.play();
        }
        if (e.key === 'r' && gameOver) resetGame();
    };

    // Update bullets
    bullets = bullets.filter(b => b.y > -b.radius);
    bullets.forEach(b => {
        b.y -= 7;
        drawBullet(b);
    });

    // Spawn and update enemies
    if (Math.random() < 0.03) spawnEnemy();
    enemies = enemies.filter(e => e.y < canvas.height);
    enemies.forEach(e => {
        e.y += e.speed;
        drawEnemy(e);
    });

    // Collision detection
    for (let i = enemies.length - 1; i >= 0; i--) {
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (Math.hypot(enemies[i].x - bullets[j].x, enemies[i].y - bullets[j].y) < enemies[i].width / 2 + bullets[j].radius) {
                enemies.splice(i, 1);
                bullets.splice(j, 1);
                score += 10;
                if (explosionSound) explosionSound.play();
                break;
            }
        }
    }

    enemies.forEach((e, i) => {
        if (checkCollision(player, e)) {
            player.health -= 10;
            enemies.splice(i, 1);
            if (player.health <= 0) gameOver = true;
        }
    });

    drawPlayer();
    scoreDisplay.textContent = `Score: ${score}`;
    requestAnimationFrame(update);
}

function resetGame() {
    player = { x: canvas.width / 2 - 25, y: canvas.height - 80, width: 50, height: 50, speed: 5, health: 100 };
    bullets = [];
    enemies = [];
    score = 0;
    gameOver = false;
    gameOverDisplay.classList.add('hidden');
    update();
}

update();