import Contents from "./Contents";

const List = ({ item }: { item: string }) => {
  return <li>{item}</li>;
};

const Personal = () => {
  return (
    <div>
      <Contents lable="personal skill" />
      <ul className="skill list-disc ml-5">
        <List item="Public Speaking" />
        <List item="Financial Management" />
        <List item="Creative Idea" />
        <List item="Project Manager" />
        <List item="Directer" />
      </ul>
    </div>
  );
};

export default Personal;
