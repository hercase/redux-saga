import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../redux/actions";
import "./index.scss";

export const ChangeName = () => {
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleChange = () => {
    const newName = input.current.value;
    if (newName.length > 3) dispatch(changeName(newName));
  };

  return (
    <div className="change-name">
      <input ref={input} type="text" name="Nombre" required />
      <button onClick={handleChange}>
        <span role="img" aria-label="change name">
          👌
        </span>
      </button>
    </div>
  );
};
