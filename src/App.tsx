import { usePet } from "./hooks/usePet";
import Pet from "./components/Pet";
import Stats from "./components/Stats";
import Controls from "./components/Controls";

function App() {
  const { pet, feed, play, sleep, reset, isSleeping } = usePet();

  return (
    <div className="app">
      <h1>Tamagotchi 🐱</h1>

      <Pet
        hunger={pet.hunger}
        happiness={pet.happiness}
        energy={pet.energy}
        isAlive={pet.isAlive}
        isSleeping={isSleeping}
      />

      <Stats
        hunger={pet.hunger}
        happiness={pet.happiness}
        energy={pet.energy}
      />

      <Controls
        onFeed={feed}
        onPlay={play}
        onSleep={sleep}
        onReset={reset}
      />
    </div>
  );
}

export default App;