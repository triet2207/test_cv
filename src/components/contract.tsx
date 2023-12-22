import Contents from "./Contents";
type TList = {
  item: string;
  infor?: string;
};
const List = ({ item }: TList) => {
  return <li>{[item]}</li>;
};

const Contract = () => {
  return (
    <div>
      <Contents lable="contract" />
      <ul className="contract list-disc ml-5">
        <li className="font-bold ">
          <List item="Phone" />
        </li>
        <p>+62 85 743041777</p>
        <li className="font-bold mt-2">
          <List item="Email" />
        </li>
        <p>youremail@gmail.com</p>
        <li className="font-bold mt-2">
          <List item="Adddress" />
        </li>
        <p>Distric, City - Country</p>
      </ul>
    </div>
  );
};

export default Contract;
