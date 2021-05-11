import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move',
  position: 'absolute'
}

const DragItem = ({ name, path, posY, posX, type, yTarget, xTarget, id, countDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log(dropResult);
      console.log(item.type);
      if (item && dropResult) {
        console.log('ID recibido -> ' + id);
        var check;
        switch (item.type) {
          case 'analistaGP':
            check = 'boxCheck-3';
            break;
          case 'analistaGN':
            check = 'boxCheck-2';
            break;
          case 'jefeSistema':
            check = 'boxCheck-1';
            break;
          case 'lider':
            check = 'boxCheck-4';
            break;
          default:

        }
        document.getElementById(check).classList.remove('dNone');
        document.getElementById('dragBox-' + id).classList.add('dNone');
        setTimeout(() => {
          document.getElementById(check).classList.add('dNone');
        }, 1000);


        countDrag();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 1 : 1

  let top = posY;
  let left = posX;

  return (
    <div ref = { drag } style = {{ ...style, opacity, 'top': top, 'left': left }} className = 'dragBox' id = {'dragBox-' + id } >
      <div className = 'scroll'>
        <p>{ name }</p>
      </div>
    </div>
  )
}

export default DragItem;
