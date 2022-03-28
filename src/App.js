import Card from "./components/Card";
import Chips from "./components/Chips";

function App() {
  return (
    <div>
      <Chips />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
