import { UseToggle } from "../../Hooks/UseToggle";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import './Toggle.css';

const ToggleBtn = () => {
  const { toggle, toggleState } = UseToggle();
  const body = document.querySelector("body")  
  toggle ? body?.classList.add("darkMode") : body?.classList.remove("darkMode")
  return (
    <>
      <h2>Dark Mode</h2>
      <button onClick={toggleState}>
        {toggle ? <FaToggleOn className="dark-mode-icon" /> : <FaToggleOff className="dark-mode-icon"/>}
      </button>
    </>
  );
};

export default ToggleBtn;
