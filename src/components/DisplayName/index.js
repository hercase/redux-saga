import { useSelector } from "react-redux";
import "./index.scss";

export const DisplayName = () => {
  const name = useSelector((state) => state.name);

  return <p className="display-name">{name}</p>;
};
