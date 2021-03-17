import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../redux/actions";
import { helloSaga } from "../../redux/sagas";
import "./index.scss";

export const ChangeName = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const input = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) dispatch(changeName(inputValue));
    setInputValue("");
  };

  return (
    <form className="change-name" onSubmit={handleChange}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={input}
        type="text"
        name="Nombre"
        pattern="^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$"
        required
      />
      <button>
        <span role="img" aria-label="change name">
          👌
        </span>
      </button>
    </form>
  );
};
