import Counter from "./Components/Counter"
import ToggleBtn from "./Components/ToggleBtn"


const App = () => {
  return (
    <>
    <Counter initialCount={5} minValue={-7} maxValue={58} stepUp={20} stepDown={11}/>
    <Counter initialCount={0} minValue={-10} maxValue={20} stepUp={3} stepDown={2}/>
    <Counter initialCount={30} minValue={0} maxValue={100} stepUp={40} stepDown={30}/>
    <ToggleBtn/>
    </>
  )
}

export default App