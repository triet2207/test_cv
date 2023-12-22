import Contents from "./Contents";
const RankStar = ({ number = 1 }: { number: number }) => {
  const dotWhite = {
    width: 8,
    height: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    display: "inline-block",
  };
  const dotYellow = {
    width: 8,
    height: 8,
    backgroundColor: "#f0ca0a",
    borderRadius: 10,
    marginRight: 10,
    display: "inline-block",
  };
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((stars) => {
        if (stars > number) {
          return <span style={dotWhite}></span>;
        } else {
          return <span style={dotYellow}></span>;
        }
      })}
    </div>
  );
};

const Expertise = () => {
  return (
    <div>
      <Contents lable="Expertise" />
      <div className="flex justify-between">
        <div>
          <p>Ms Word</p>
          <p>Ms Excel</p>
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>Corel Draw</p>
        </div>
        <div>
          <RankStar number={5} />
          <RankStar number={3} />
          <RankStar number={4} />
          <RankStar number={3} />
          <RankStar number={4} />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
