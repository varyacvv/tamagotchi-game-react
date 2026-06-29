import happy from "../assets/happy.png";
import neutral from "../assets/pet.png";
import sad from "../assets/sad.png";
import sleepImg from "../assets/sleep.png";
import dead from "../assets/dead.png";

type Props = {
  hunger: number;
  happiness: number;
  energy: number;
  isAlive: boolean;
  isSleeping: boolean;
};

function Pet({ hunger, happiness, energy, isAlive, isSleeping }: Props) {
  const getPetImage = () => {
    if (!isAlive) return dead;
    if (isSleeping) return sleepImg;

    const avg = (hunger + happiness + energy) / 3;

    if (avg >= 80) return happy;
    if (avg >= 40) return neutral;
    if (avg >= 1) return sad;

    return dead;
  };

  return (
    <div className="screen">
      <img src={getPetImage()} className="pet" />
      {!isAlive && <p className="dead-text">your cat died</p>}
    </div>
  );
}

export default Pet;