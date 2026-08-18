# 🐾 Tamagotchi Game

## RU

### О проекте

**Tamagotchi Game** — небольшое интерактивное веб-приложение, вдохновлённое классической игрой «Тамагочи».

Проект создан как pet-project для практики **React, TypeScript, компонентной архитектуры, React-хуков и управления состоянием**.

Питомец живёт в браузере: его показатели постепенно изменяются со временем, действия игрока влияют на состояние питомца, а прогресс сохраняется в `localStorage`.

### ✨ Возможности

* Кормление питомца
* Игра с питомцем
* Сон для восстановления энергии
* Сброс игрового прогресса
* Динамические эмоции питомца: Happy, Normal, Sad, Sleeping, Dead
* Автоматическое снижение показателей со временем
* Сохранение состояния игры в `localStorage`
* Изменение внешнего вида питомца в зависимости от его состояния
* Управление состоянием с помощью React Hooks

### 🛠 Технологии

* React
* TypeScript
* Vite
* CSS
* React Hooks
* LocalStorage
* Git / GitHub

### 📂 Структура проекта

```text
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
```

### 🎮 Игровая механика

Питомец имеет **три основных показателя**:

* **Hunger** — голод
* **Happiness** — счастье
* **Energy** — энергия

Показатели постепенно уменьшаются со временем. Если один из показателей достигает нуля, питомец умирает.

#### Эмоции питомца

Внешний вид питомца зависит от среднего значения всех трёх показателей.

| Среднее значение | Эмоция |
| ---------------- | ------ |
| 80–100           | Happy  |
| 40–79            | Normal |
| 1–39             | Sad    |
| 0                | Dead   |

#### Действия игрока

| Действие  | Эффект                             |
| --------- | ---------------------------------- |
| **Feed**  | Восстанавливает голод              |
| **Play**  | Повышает счастье и снижает энергию |
| **Sleep** | Восстанавливает энергию            |
| **Reset** | Начинает новую игру                |

Во время сна питомец отображается в соответствующем состоянии в течение нескольких секунд.

### Установка и запуск

#### Требования

* Node.js 16 или выше
* npm или yarn

#### Установка

Клонируйте репозиторий:

```bash
git clone https://github.com/varyacvv/tamagotchi-game-react.git
cd tamagotchi-game-react
```

Установите зависимости:

```bash
npm install
```

Запустите проект в режиме разработки:

```bash
npm run dev
```

После запуска откройте адрес, указанный Vite в терминале, обычно:

```text
http://localhost:5173
```

### Что я практиковала

В рамках проекта я работала над:

* созданием функциональных React-компонентов
* использованием React Hooks
* управлением состоянием приложения
* созданием пользовательского хука `usePet`
* типизацией данных с помощью TypeScript
* передачей данных между компонентами
* разделением приложения на компоненты
* работой с `localStorage`
* обработкой пользовательских действий
* реализацией игровой логики
* использованием таймеров для изменения состояния во времени
* деплоем React-приложения на GitHub Pages
* работой с Git и GitHub

---

## Автор

Проект был выполнен @varyacvv. Все изображения и содержание условные, используются только в учебных целях.
* GitHub: [@varyacvv](https://github.com/varyacvv)
* Telegram: [@varyacvv](https://t.me/varyacvv)

---

## ENG

### About the Project

**Tamagotchi Game** is a small interactive web application inspired by the classic Tamagotchi game.

The project was created as a pet project to practice **React, TypeScript, component-based architecture, React Hooks and state management**.

The pet lives in the browser: its stats gradually change over time, player actions affect its state, and the game progress is saved in `localStorage`.

### ✨ Features

* Feed the pet
* Play with the pet
* Sleep to restore energy
* Reset the game
* Dynamic pet emotions: Happy, Normal, Sad, Sleeping, Dead
* Automatic stat decrease over time
* Game state persistence using `localStorage`
* Dynamic pet appearance based on its current state
* State management with React Hooks

### 🛠 Tech Stack

* React
* TypeScript
* Vite
* CSS
* React Hooks
* LocalStorage
* Git / GitHub

### 📂 Project Structure

```text
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
```

### 🎮 Game Mechanics

The pet has **three main stats**:

* **Hunger**
* **Happiness**
* **Energy**

The stats gradually decrease over time. If one of the stats reaches zero, the pet dies.

#### Pet Emotions

The pet's appearance depends on the average value of all three stats.

| Average Value | Emotion |
| ------------- | ------- |
| 80–100        | Happy   |
| 40–79         | Normal  |
| 1–39          | Sad     |
| 0             | Dead    |

#### Player Actions

| Action    | Effect                                   |
| --------- | ---------------------------------------- |
| **Feed**  | Restores hunger                          |
| **Play**  | Increases happiness and decreases energy |
| **Sleep** | Restores energy                          |
| **Reset** | Starts a new game                        |

While sleeping, the pet is displayed in its sleeping state for several seconds.

### Getting Started

#### Requirements

* Node.js 16 or higher
* npm or yarn

#### Installation

Clone the repository:

```bash
git clone https://github.com/varyacvv/tamagotchi-game-react.git
cd tamagotchi-game-react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

After starting the project, open the address provided by Vite in the terminal, usually:

```text
http://localhost:5173
```

### What I Practiced

This project helped me practice:

* building functional React components
* working with React Hooks
* state management
* creating a custom `usePet` hook
* TypeScript data typing
* passing data between components
* component-based application structure
* working with `localStorage`
* handling user interactions
* implementing game logic
* using timers to update state over time
* deploying a React application to GitHub Pages
* Git and GitHub workflow

---

## Author

The project was created by @varyacvv. All images and content are illustrative and used for educational purposes only.
* GitHub: [@varyacvv](https://github.com/varyacvv)
* Telegram: [@varyacvv](https://t.me/varyacvv)



