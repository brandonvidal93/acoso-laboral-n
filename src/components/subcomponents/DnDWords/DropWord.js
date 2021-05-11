import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  
}

const DropWord = ({ posY, posX, type, size, id, color }) => {
  console.log(color);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: 'Artículos' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  // 'top': posY, 'left': posX, 'width': size
  return (
    <div className = 'dF-C-cc boxDrop mB-1' ref = { drop } style = {{ ...style }} id = { 'boxDrop-' + type } >

    </div>
  )
}
export default DropWord;
