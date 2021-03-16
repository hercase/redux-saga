import { ChangeName } from "./components/ChangeName";
import { DisplayName } from "./components/DisplayName";
import "./sass/main.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <DisplayName />
        <ChangeName />
      </div>
    </div>
  );
}
