import Bar from "./Bar";

type Props = {
  hunger: number;
  happiness: number;
  energy: number;
};

function Stats({ hunger, happiness, energy }: Props) {
  return (
    <div>
      <Bar label="Hunger" value={hunger} />
      <Bar label="Happiness" value={happiness} />
      <Bar label="Energy" value={energy} />
    </div>
  );
}

export default Stats;