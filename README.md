# 🎮 Pop the Beast!

**A fast-paced arcade game built with HTML, CSS, and JavaScript.**

Catch the popping creatures, avoid dangerous beasts, and test your reflexes in this interactive arcade game. Choose your game mode, chase high scores, and see how long you can survive!

🔗 **Live Demo:** [Pop the Beast!](https://suprio-dev.github.io/Pop-the-Beast-/)

---

## ✨ Features

- 🎮 **Multiple Game Modes** — Choose between Time Attack and Endless Mode.
- 🎯 **Interactive 3 × 3 Game Board** — Catch creatures as they appear across the grid.
- 🐾 **Random Creature Spawning** — Creatures appear at random positions.
- 💀 **Dangerous Beasts** — Avoid clicking dangerous creatures or lose a life.
- ❤️ **Life-Based Gameplay** — Manage your remaining lives and survive as long as possible.
- ⏱️ **30-Second Countdown** — Race against time in Time Attack mode.
- ♾️ **Endless Mode** — Keep playing until you lose all your lives.
- 🏆 **High Score Tracking** — Save and retrieve your best scores using `localStorage`.
- 📊 **Real-Time Score Updates** — Track your score and remaining lives during gameplay.
- 💥 **Animated Game Effects** — Creature appearances, hit effects, and visual feedback.
- 🔨 **Custom Hammer Cursor** — Adds an arcade-style feel to the game.
- ▶️ **Start and Reset Controls** — Start a round or reset the current game.
- ☠️ **Game-Over Overlays** — View your final score after time expires or all lives are lost.
- ↩️ **Back to Modes Navigation** — Return to the mode selection screen.
- 📱 **Responsive Interface** — Play across different screen sizes.
- 🌑 **Dark Arcade UI** — A vibrant interface with bold colors, glowing accents, and animated elements.
- 📳 **Screen Shake Effect** — The game screen shakes briefly when a dangerous creature is clicked or a life is lost, adding impactful arcade-style visual feedback.
- ℹ️ **Game Instructions & About Section** — Learn about the game, gameplay rules, objectives, and available game modes through an interactive information overlay.

---

## 🕹️ Game Modes

### ⏱️ Time Attack

- Play against a 30-second countdown.
- Catch normal creatures to earn points.
- Avoid dangerous beasts that cost you a life.
- Try to achieve your highest score before time runs out.

### ♾️ Endless Mode

- Play without a countdown timer.
- Catch creatures and build your score.
- Avoid dangerous beasts while managing your limited lives.
- The game ends when you lose all your lives.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Game structure and layout |
| Tailwind CSS | Responsive UI styling |
| CSS3 | Creature design, animations, transitions, and visual effects |
| JavaScript (ES6+) | Game logic, event handling, and state management |
| DOM API | Dynamic updates to scores, lives, timers, and game states |
| `setInterval()` | Repeated creature spawning and countdown management |
| `setTimeout()` | Delayed effects and creature visibility control |
| `Math.random()` | Random creature positioning and dangerous-beast spawning |
| `classList` | Dynamic CSS class manipulation |
| `localStorage` | Persistent high-score storage |

---

## 🔄 How It Works

```text
        Select Game Mode
               ↓
        Start the Game
               ↓
     Initialize Game State
               ↓
       Spawn a Creature
               ↓
       Identify the Target
               ↓
     ┌─────────┴─────────┐
     ↓                   ↓
Normal Creature      Dangerous Beast
     ↓                   ↓
  Click It            Click It
     ↓                   ↓
Increase Score       Lose a Life
     └─────────┬─────────┘
               ↓
       Update Game State
               ↓
    Check the Game-Over Rules
               ↓
    ┌──────────┴───────────┐
    ↓                      ↓
Time Runs Out         Lives Reach Zero
    ↓                      ↓
Final Score & Game-Over Screen
               ↓
       Try Again or Reset
```

Pop the Beast! randomly spawns creatures across a 3 × 3 grid. Click normal creatures to earn points, but watch out for dangerous beasts that cost you a life.

In **Time Attack**, the round ends when the countdown reaches zero or all lives are lost. In **Endless Mode**, the game continues until all lives are gone.

Your best score is stored in `localStorage`, allowing it to persist across page reloads in the same browser.

---

## 🎯 What I Practiced

Building this project helped me strengthen my JavaScript fundamentals through hands-on implementation.

- Selecting and manipulating DOM elements
- Handling click events with `addEventListener()`
- Managing multiple game states
- Working with `setInterval()` and `setTimeout()`
- Generating random values using `Math.random()`
- Using conditional statements and comparison operators
- Dynamically adding and removing CSS classes with `classList`
- Managing scores, lives, and countdown timers
- Storing and retrieving persistent data with `localStorage`
- Implementing game-over conditions and overlays
- Creating CSS animations, transitions, and pseudo-elements
- Building responsive layouts
- Organizing gameplay logic across separate JavaScript files
- Designing interactive game modes and navigation

---

## 🚀 Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/suprio-dev/Pop-the-Beast-.git
```

**2. Navigate to the project directory**

```bash
cd Pop-the-Beast-
```

**3. Open the project**

Open `index.html` using VS Code Live Server.

No external API key is required.

---

## 📌 Project Status

**Completed — v1.0**

Pop the Beast! was built as a hands-on project to practice JavaScript fundamentals through interactive gameplay, DOM manipulation, event handling, randomization, game-state management, and persistent browser storage.

The project combines two gameplay modes with an arcade-inspired interface to make learning JavaScript more engaging.

More features may be added as the project evolves.