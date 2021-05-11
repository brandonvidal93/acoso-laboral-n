import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DropWord from './subcomponents/DnDWordBox/DropWordBox';
import DragWord from './subcomponents/DnDWordBox/DragWordBox';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableWordBox.scss';

library.add(fas, fab, far);

class DraggableWordBox extends Component {
  state = {
    showModal: false,
  }

  hideModal = (e) => {
    document.getElementById('infoFinal').classList.add('dNone');

    this.setState({
      showModal: !this.state.showModal
    });
  }

  countWords = () => {
    let parent = document.getElementById('contentWords');
    let cantidad = parent.getElementsByClassName('dNone').length;

    if (cantidad === 3) {
      document.getElementById('infoFinal').classList.remove('dNone');
      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE

      document.querySelector('.footer').classList.add('dNone');
    }
  }

  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableWordBox'>
        <DndProvider backend = { HTML5Backend }>
          <div className = 'contentSlide dF-R-cc mB-025'>
            {
              multimedia.dropZone.paragraph.map( (item, i) => {
                return(
                  <div key = { item.key } className = {'slideBox animated fadeIn '}>

                    {
                      item.drops.map( (boxDrop, i) => {
                        return(
                          <DropWord
                            key = { boxDrop.key }
                            id = { boxDrop.key }
                            size = { boxDrop.size }
                            posY = { boxDrop.posY }
                            posX = { boxDrop.posX }
                            type = { boxDrop.type }
                            colorBorder = { multimedia.dropZone.colors[i] } />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>

          <div className = 'contentWords pAbs c-10' id = 'contentWords' >
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <DragWord
                    key = { item.id }
                    id = { item.id }
                    name = { item.text }
                    type = { item.text }
                    countWords = { this.countWords }
                    colorBg = { item.color }/>
                )
              })
            }
          </div>
        </DndProvider>

        <div
          className = { 'infoGloble d-Flex d-C j-C aI-C animated fadeIn bgColor-15 dNone'}
          id = 'infoFinal'>

          <h1 className = 'color-4 mB-05 tCenter' >{ multimedia.InfoFinal.info.title }</h1>
          <div className = 'dF-C-cs' dangerouslySetInnerHTML = { {__html: multimedia.InfoFinal.info.text} }/>
          <button
            className = 'buttonClose'
            onClick = { this.hideModal }
            >
            <span className = 'fa-layers fa-fw iconButton' >
              <FontAwesomeIcon icon="circle" />
              <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default DraggableWordBox;
