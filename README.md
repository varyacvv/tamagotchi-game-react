# Tamagotchi 🐱

A small pet game built with React + TypeScript.

This project is my pet-project for learning React hooks, TypeScript, component architecture, and state management.

## Features
- Feed your pet 🍔
- Play with your pet 🎮
- Put your pet to sleep 💤
- Reset the game 🔄
   Dynamic pet emotions:
- Happy 😄
- Normal 🙂
- Sad 😢
- Sleeping 😴
- Dead 💀
## Progress bars for:
- Hunger
- Happiness
- Energy

### Automatic stat decreasing over time
### Save game progress in localStorage

## The pet has 3 main stats:

- Hunger
- Happiness
- Energy
- *Every second, all stats decrease. If one of the stats reaches 0, the pet dies.*

## Actions:
- Feed → restores hunger
- Play → increases happiness, decreases energy
- Sleep → restores energy for 5 seconds
- Reset → starts a new game
- 
# Pet States
The pet changes its image depending on its average stats:
**80–100** → happy
**40–79** → normal
**1–39** → sad

## Used technologies
- React
- TypeScript
- Vite
- CSS
- localStorage

## Project Structure
src/
├── assets/
├── components/
│   ├── Bar.tsx
│   ├── Controls.tsx
│   ├── Pet.tsx
│   └── Stats.tsx
│
├── hooks/
│   └── usePet.ts
│
├── types/
│   └── pet.ts
│
├── App.tsx
├── main.tsx
└── index.css

## Installation

- Clone the repository:
- git clone <your-repository-link>

## While building this project I practiced:

- React components
- Props
- Custom hooks
- useState
- useEffect
- TypeScript
- localStorage persistence
- Game state logic
