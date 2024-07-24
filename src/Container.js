import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import Item2 from './Item2';
import Item from './Item';

export default function Container() {
  const [items, setItems] = useState([]);
  const handleDrop = (item) => {
    setItems(prevItems => [...prevItems, item]);
  }
  const [{ canDrop, isOver }, dropRef] = useDrop(() => {
    console.log('in use drop fun');
    return ({
      accept: ItemTypes.ITEM,
      drop: (item, monitor) => {
        handleDrop(item);
        console.log('dropped item', item, monitor);
      },
      collect: (monitor) => {
        console.log('sdds',monitor.canDrop());
        return ({
        canDrop: monitor.canDrop(),
        isOver: monitor.isOver()
      })
    }
    })
  });
  console.log(canDrop, isOver);
  return (
    <div ref={dropRef} style={{ border: canDrop ? '2px solid blue' : '2px dashed gray', height: 100, width: 100, background: 'orange' }}>
      {isOver ? 'Release item to drop' : 'Drag item here'}
      {items.map((item, index) => (item.name === 'item1' ? <Item id={item.id} name={item.name}/>
        : <Item2/>))}
    </div>
  );
}
