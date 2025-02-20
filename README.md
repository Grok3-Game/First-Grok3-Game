Space Shooter - First Ever Grok-Made Game
Welcome to Space Shooter, the first ever game created with assistance from Grok, an AI developed by xAI! This is a browser-based space shooter game built with HTML5 Canvas, CSS, and JavaScript, designed to be hosted on Netlify. Take control of a spaceship, shoot down enemies with purple bullets, and survive as long as you can while racking up points!
Features
Playable in Browser: No downloads required—just visit the Netlify URL and start playing.
Unique Heading: Displays "First Ever Grok-Made Game" at the top of the game canvas in cyan.
Purple Bullets: Shoot distinctive purple projectiles to destroy enemies.
Health System: Player has a health bar that depletes upon enemy collisions.
Scoring: Earn 10 points per enemy destroyed.
Responsive Controls: Move with arrow keys, shoot with spacebar, and restart with 'R'.
Optional Assets: Supports custom spaceship image and sound effects, with fallbacks to basic shapes if assets are missing.
Game Over Screen: Displays final score and restart option when health reaches zero.
Prerequisites
To run or deploy this game, you need:
A modern web browser (e.g., Chrome, Firefox, Edge) to play the game.
A Netlify account (free tier is sufficient) for deployment.
Optional: Git and a GitHub account for version control and automated deployment.
Installation (Local Development)
To run the game locally before deploying:
Clone or Download:
Clone this repository (if using Git):
git clone https://github.com/your-username/space-shooter-web.git
cd space-shooter-web
Or download the ZIP and extract to a folder (e.g., D:\Code\space_shooter_web).
Directory Structure:
Ensure your folder matches:
space_shooter_web/
├── index.html
├── styles.css
├── game.js
└── assets/
    ├── images/
    │   └── spaceship.png    (optional)
    └── sounds/
        ├── shoot.wav        (optional)
        └── explosion.wav    (optional)
Serve Locally:
Use a local server (e.g., Python’s built-in server):
cd D:\Code\space_shooter_web
python -m http.server 8000
Open your browser to http://localhost:8000.
Add Assets (Optional):
Copy your spaceship.png, shoot.wav, and explosion.wav into assets/images/ and assets/sounds/ if you have them.
Example:
cp -r D:\Code\space_shooter\assets D:\Code\space_shooter_web\
The game works without these, using white rectangles and no sound as fallbacks.
Deployment to Netlify
To make the game playable online:
Option 1: Drag-and-Drop
Prepare Files:
Ensure all files are in space_shooter_web/ as listed above.
Upload:
Go to app.netlify.com.
Drag the space_shooter_web/ folder into the "Sites" dropzone.
Access:
Netlify will provide a URL (e.g., your-site-name.netlify.app).
Option 2: Git Deployment
Initialize Git:
cd D:\Code\space_shooter_web
git init
git add .
git commit -m "Initial commit of Space Shooter web game"
Push to GitHub:
Create a new repository on GitHub.
Push your code:
git remote add origin https://github.com/your-username/space-shooter-web.git
git push -u origin main
Connect to Netlify:
In Netlify, select "New site from Git."
Choose your GitHub repo.
Set the base directory to / (default).
Deploy the site.
Access:
Visit your Netlify URL to play.
Controls
Left Arrow: Move spaceship left.
Right Arrow: Move spaceship right.
Spacebar: Shoot purple bullets.
R: Restart the game after "Game Over."
Gameplay
Objective: Shoot down red enemy ships with purple bullets to earn points (10 per enemy).
Health: A red health bar above the player decreases when hit by enemies. Game ends at 0 health.
Enemies: Spawn randomly from the top and move downward at varying speeds.
Restart: Press 'R' to reset after game over.
File Structure
space_shooter_web/
├── index.html          # Main HTML file with canvas and UI elements
├── styles.css          # CSS for styling the game canvas and text
├── game.js             # JavaScript game logic (player, bullets, enemies, collisions)
└── assets/             # Optional static assets
    ├── images/
    │   └── spaceship.png    # Player spaceship image (optional)
    └── sounds/
        ├── shoot.wav        # Shooting sound effect (optional)
        └── explosion.wav    # Enemy destruction sound (optional)
File Details
index.html: Defines the game canvas, score display, and game over screen.
styles.css: Styles the canvas, score, and game over text for a clean look.
game.js: Contains all game logic:
Draws "First Ever Grok-Made Game" heading in cyan.
Renders purple bullets (ctx.fillStyle = 'purple').
Handles player movement, enemy spawning, collision detection, and game state.
assets/: Optional folder for enhancing visuals and audio.
Customization
Bullet Color: Edit drawBullet() in game.js (e.g., change 'purple' to '#800080' for a specific shade).
Assets: Replace spaceship.png, shoot.wav, and explosion.wav with your own files in assets/.
Difficulty: Adjust enemy spawn rate (e.g., change Math.random() < 0.03 to 0.05 in update()) or speed in spawnEnemy().
Troubleshooting
Game Not Loading:
Check browser console (F12 > Console) for errors (e.g., 404 for missing files).
Ensure index.html is at the root of your Netlify deploy.
Assets Not Working:
Verify paths in game.js match your assets/ folder structure.
Test locally first to confirm asset loading.
Performance:
Reduce enemy spawn rate if lag occurs on slower devices.
Credits
Created By: You, with assistance from Grok (xAI).
Grok’s Role: Provided initial Python/Pygame version and guided the conversion to JavaScript for web deployment.
License
This project is open-source under the MIT License. Feel free to modify and share!
Adding to Your Project
Create README.md:
Save the above content as README.md in D:\Code\space_shooter_web\.
Example:
echo # Space Shooter - First Ever Grok-Made Game > README.md
Then paste the rest manually or use a text editor.
Include in Netlify:
Add README.md to your space_shooter_web/ folder.
It won’t affect the game but will be visible if you host the repo on GitHub.
Deploy:
Follow the deployment steps above, ensuring index.html, styles.css, game.js, and optional assets/ are uploaded.
