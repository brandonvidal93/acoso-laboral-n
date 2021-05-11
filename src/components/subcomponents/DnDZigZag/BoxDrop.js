import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  position: 'absolute'
}

const BoxDrop = ({ i, path, posY, posX, type, data, pathTarget }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: '' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = {'dF-C-cc itemDrop'} id = { 'itemDrop' + i } ref = { drop } style = {{ ...style, 'top': posY, 'left': posX }} >
      <img
        alt = 'Drop'
        className = 'imgPath'
        src = { path } />

    </div>
  )
}
export default BoxDrop;
