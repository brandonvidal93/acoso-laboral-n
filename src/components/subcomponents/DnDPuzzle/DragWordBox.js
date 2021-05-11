import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  cursor: 'move'
}

const DragWord = ({ name, type, id, countWords, img, imgCheck, checkPosY, checkPosX }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`);
        // console.log(`You dropped ${type} item`);
        // AQUI ES DONDE VA EL CODIGO PARA MOSTRAR EL GLOBO INFO

        document.getElementById('dragWord-' + id).classList.add('dNone');
        // document.getElementById('boxDrop-' + type).classList.add('dNone');
        document.getElementById('boxDrop-' + type).innerHTML = '<img src = "' + imgCheck + '" />';
        document.getElementById('boxDrop-' + type).style.top = checkPosY + 'px';
        document.getElementById('boxDrop-' + type).style.left = checkPosX + 'px';
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  return (
    <div className = 'dragWord dF-R-cc' ref = { drag } style = {{ ...style, opacity }} id = {'dragWord-' + id } onDragEnd = { countWords }>
      <img alt = 'imgDrag' src = { img } />
    </div>
  )
}

export default DragWord;
