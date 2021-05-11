import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDWords/DropWord';
import DragWord from './subcomponents/DnDWords/DragWord';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesomeLogoFull, fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableWords.scss';

library.add(fas, fab, far);

class DraggableWords extends Component {
  state = {
    page: 1
  }

  mSlides = e => {
    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        page: this.state.page - 1
      });
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        page: this.state.page + 1
      });
      document.getElementById('boxCheck').classList.add('dNone');
    }
  }

  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('dNone').length;
    // console.log(cantidad);

    if (cantidad === this.props.multimedia.dragItem.length) {
      // console.log('final');
      // this.props.handleClick(0);
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableWords d-Flex j-S aI-S'>
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentSlide d-Flex j-C aI-C mT-2'>
            <button className = { 'buttonSlide mR-05 ' + (this.state.page === 1 ? 'disabled' : '') } id = 'btnAnt' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton'  >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="chevron-left" inverse transform="shrink-6" />
              </span>
            </button>

            {
              multimedia.dropZone.paragraph.map( (item, i) => {
                return(
                  <div key = { item.key } className = {'slideBox animated fadeIn ' + (item.key !== this.state.page ? 'dNone' : '')}>
                    {
                      item.drops.map( (boxDrop, i) => {
                        return(
                          // console.log(boxDrop.text)
                          <DropWord
                            key = { boxDrop.key }
                            id = { boxDrop.key }
                            size = { boxDrop.size }
                            posY = { boxDrop.posY }
                            posX = { boxDrop.posX }
                            color = { boxDrop.color }
                            type = { boxDrop.type } />
                        )
                      })
                    }
                    {
                      item.lines.map( (line, i) => {
                        return(
                          // console.log(line.text) style = { { 'top': line.posY, 'left': line.posX } }
                          <p key = { line.key } className = 'line-drop' >{ line.text }</p>
                        )
                      })
                    }
                  </div>
                )
              })
            }
            
            <div className = 'boxCheck pAbs dNone d-Flex j-C aI-C' id = 'boxCheck'>
              <img
              alt = 'img'
              className = ''
              src = { multimedia.dropZone.imgCheck }/>
            </div>

            <button className = { 'buttonSlide mL-05 ' + (this.state.page === multimedia.dropZone.paragraph.length ? 'disabled' : '') } id = 'btnSig' onClick = { this.mSlides }>
              <span className = 'fa-layers fa-fw iconButton'  >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="chevron-right" inverse transform="shrink-6" />
              </span>
            </button>
          </div>

          <div className = 'contentWords d-Flex d-C j-C aI-C' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <DragWord
                    key = { item.id }
                    id = { item.id }
                    name = { item.text }
                    type = { item.text }
                    color = { item.color }
                    countWords = { this.countWords }/>
                )
              })
            }
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableWords;
