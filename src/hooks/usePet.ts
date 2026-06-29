import { useState, useEffect } from "react";
import type { Pet } from "../types/pet";

const initialPet: Pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  isAlive: true,
};

export function usePet() {
  const [pet, setPet] = useState<Pet>(() => {
    const savedPet = localStorage.getItem("pet");

    if (savedPet) {
      try {
        return JSON.parse(savedPet);
      } catch {
        return initialPet;
      }
    }

    return initialPet;
  });

  const [isSleeping, setIsSleeping] = useState(false);

  // Таймер жизни питомца
  useEffect(() => {
    const interval = setInterval(() => {
      setPet((prev) => {
        if (!prev.isAlive) return prev;

        const hunger = Math.max(prev.hunger - 0.5, 0);
        const happiness = Math.max(prev.happiness - 0.5, 0);
        const energy = Math.max(prev.energy - 0.5, 0);

        const isDead =
          hunger === 0 ||
          happiness === 0 ||
          energy === 0;

        return {
          ...prev,
          hunger,
          happiness,
          energy,
          isAlive: !isDead,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("pet", JSON.stringify(pet));
  }, [pet]);

  // Покормить
  const feed = () => {
    setPet((prev) => {
      if (!prev.isAlive) return prev;

      return {
        ...prev,
        hunger: Math.min(prev.hunger + 10, 100),
      };
    });
  };

  // Поиграть
  const play = () => {
    setPet((prev) => {
      if (!prev.isAlive) return prev;

      return {
        ...prev,
        happiness: Math.min(prev.happiness + 10, 100),
        energy: Math.max(prev.energy - 5, 0),
      };
    });
  };

  // Сон
  const sleep = () => {
    if (!pet.isAlive) return;

    setIsSleeping(true);

    setPet((prev) => ({
      ...prev,
      energy: Math.min(prev.energy + 15, 100),
    }));

    setTimeout(() => {
      setIsSleeping(false);
    }, 5000);
  };

  // Сброс игры
  const reset = () => {
    setIsSleeping(false);
    localStorage.removeItem("pet");
    setPet(initialPet);
  };

  return {
    pet,
    feed,
    play,
    sleep,
    reset,
    isSleeping,
  };
}