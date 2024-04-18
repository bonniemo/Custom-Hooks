import Button from "./Components/Button";
import Counter from "./Components/Counter";
import SWPerson from "./Components/SWPerson";
import ToggleBtn from "./Components/Toggle/ToggleBtn";

const App = () => {
  return (
    <>
      <section className="darkmode-wrap">
        <h2>Dark Mode</h2>
        <ToggleBtn />
      </section>
      <SWPerson url={"https://swapi.py4e.com/api/people/4/"} />
      <SWPerson url={"https://swapi.py4e.com/api/people/1/"} />
      <Button onClick={() => console.log("clicked")}>Log In</Button>
      <Counter
        initialCount={5}
        minValue={0}
        maxValue={50}
        step={1}
        stepUp={20}
        stepDown={11}
      />
      <Counter
        initialCount={0}
        minValue={-10}
        maxValue={20}
        step={1}
        stepUp={3}
        stepDown={2}
      />
      <Counter
        initialCount={30}
        minValue={0}
        maxValue={100}
        step={1}
        stepUp={40}
        stepDown={30}
      />
    </>
  );
};

export default App;
