import Counter from "./Components/Counter"
import ToggleBtn from "./Components/ToggleBtn"


const App = () => {
  return (
    <>
    <Counter initialCount={5} minValue={0} maxValue={5} step={1} stepUp={20} stepDown={11}/>
    <Counter initialCount={0} minValue={-10} maxValue={20} step={1} stepUp={3} stepDown={2}/>
    <Counter initialCount={30} minValue={0} maxValue={100} step={1} stepOne={1} stepUp={40} stepDown={30}/>
    <ToggleBtn/>
    </>
  )
}

export default App