import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from "./Container";
import Item from "./Item";
import Item2 from "./Item2";

function App() {
  return <DndProvider backend={HTML5Backend}>
    <Container/>
    <Item id={1} name={'item1'}/>
    <Item2 id={2} name={'item2'} />
  </DndProvider>;
}

export default App;
