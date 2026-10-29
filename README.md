# 🎮 Pop the Beast!

**A fast-paced arcade game built with JavaScript.**

Catch the popping creatures, avoid dangerous beasts, and score as many points as possible before the 30-second timer runs out. You have three lives — how long can you survive?

🔗 **Live Demo:** [Pop the Beast!](https://suprio-dev.github.io/Pop-the-Beast-/)

---

## ✨ Features

- 🎯 Interactive 3 × 3 game board
- 🐾 Random creature spawning
- 💀 Dangerous beasts that cost you a life when clicked
- ❤️ Three-life survival system
- ⏱️ 30-second countdown timer
- 🏆 High score tracking with `localStorage`
- 📊 Real-time score and lives updates
- 💥 Animated creature appearances and hit effects
- 🔨 Custom hammer cursor for an arcade-style experience
- 🔄 Start and reset controls
- 🎮 Game-over screens for time expiry and lost lives
- 📱 Responsive layout with Tailwind CSS
- 🌑 Dark UI with lime-green accents

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Game structure and layout |
| Tailwind CSS | Responsive UI styling |
| CSS3 | Creature design, animations, and transitions |
| JavaScript | Game logic, event handling, and state management |
| DOM API | Dynamic updates to scores, timers, lives, and game states |
| localStorage | Persistent high score across page reloads |

---

## 🔄 How It Works

```text
Start the Game
      ↓
Initialize Timer & Lives
      ↓
Spawn a Random Creature
      ↓
Identify the Creature
      ↓
 ┌─────────────────┐
 │ Normal Creature │ → Click → Increase Score
 └─────────────────┘
 ┌─────────────────┐
 │  Danger Beast   │ → Click → Lose a Life
 └─────────────────┘
      ↓
Update Game State
      ↓
Time Runs Out or Lives Reach Zero
      ↓
Display Final Score & Update High Score
```

Pop the Beast! randomly spawns creatures across a 3 × 3 grid. Click normal creatures to earn points, but watch out for dangerous beasts that cost you a life. The game ends when the timer reaches zero or all three lives are lost.

Your best score is saved using `localStorage`, so it can persist across page reloads in the same browser.

---

## 🎯 What I Practiced

This project helped me practice:

- DOM selection and manipulation
- Event listeners and click handling
- Timer management with `setInterval()` and `setTimeout()`
- Random number generation using `Math.random()`
- Conditional statements and game-state logic
- CSS class manipulation with `classList`
- Managing score, timer, and lives
- Saving and retrieving data with `localStorage`
- Creating interactive overlays and game-over states
- CSS animations, transitions, and pseudo-elements
- Responsive UI development with Tailwind CSS

---

## 🚀 Run Locally

```bash
git clone https://github.com/suprio-dev/Pop-the-Beast-.git
cd Pop-the-Beast-
```

Open `index.html` using VS Code Live Server.

No external API key is required.

---

## 📌 Project Status

**Completed — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals through interactive gameplay, DOM manipulation, timers, event handling, and persistent browser storage.

More features may be added as the project evolves.