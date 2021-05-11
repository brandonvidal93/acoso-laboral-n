import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDPuzzle/DropWordBox';
import DragWord from './subcomponents/DnDPuzzle/DragWordBox';

// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggablePuzzle.scss';

// library.add(fas, fab, far);

class DraggableWordBox extends Component {
  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('dNone').length;

    if (cantidad === 4) {
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableWordBox d-Flex d-R j-E aI-C'>
        <DndProvider backend = { HTML5Backend }>
        <div className = 'contentWords c-6' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <DragWord
                    key = { item.id }
                    id = { item.id }
                    name = { item.text }
                    img = { item.img }
                    type = { item.text }
                    countWords = { this.countWords }
                    imgCheck = { item.imgCheck }
                    checkPosY = { item.checkPosY }
                    checkPosX = { item.checkPosX } />
                )
              })
            }
          </div>
          <div className = 'contentSlide mR-5'>
            {
              multimedia.dropZone.paragraph.map( (item, i) => {
                return(
                  <div key = { item.key } className = { 'slideBox' } id = { 'slideBox' }>

                    {
                      item.drops.map( (boxDrop, i) => {
                        return(
                          <DropWord
                            key = { boxDrop.key }
                            posY = { boxDrop.posY }
                            posX = { boxDrop.posX }
                            type = { boxDrop.type }
                            img = { boxDrop.img } />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

        </DndProvider>
      </div>
    );
  }
}

export default DraggableWordBox;
