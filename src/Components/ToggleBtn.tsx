import { UseToggle } from "../Hooks/UseToggle"
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";


const ToggleBtn = () => {
    const {toggle, toggleState} = UseToggle()
  return (
    <>
        <button onClick={toggleState}>{toggle ? <FaToggleOn/> : <FaToggleOff/>}</button>
    </>
  )
}

export default ToggleBtn