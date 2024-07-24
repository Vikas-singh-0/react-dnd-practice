import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Item = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (arg) => {
      console.log('end', arg);
    }
  }));

  return (
    <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1, background: 'red', height: 20, width: 100 }}>
      {name}
    </div>
  );
};

export default  Item;