import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './subcomponents/DnDZigZag/BoxDrop';
import DragItem from './subcomponents/DnDZigZag/DragItem';
// import ModalInfo3 from './ModalInfo3';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableZigZag.scss';

library.add(fas, fab, far);

class DraggableZigZag extends Component {
  state = {
    showItem: false,
    actualItem: 0,
    showModal: false,
    showInfo: 0,
  }

  hideModal = (e) => {
    document.getElementById('infoFinal').classList.add('dNone');

    if (this.state.actualItem === 4) {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }

  countDrag = () => {
    this.setState({
      actualItem: this.state.actualItem + 1
    });

    if (this.state.actualItem === 8) {
      console.log('Fin');

      setTimeout(() => {
        document.getElementById('infoFinal').classList.remove('dNone');
      }, 1200);

      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  hideModalFinal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }
  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableZigZag c-10'>
        <DndProvider backend={HTML5Backend}>
          <div>
            {
              multimedia.dropZone.map( (item, i) => {
                return(
                  <div key = { item.drop } >

                    <BoxDrop
                      i = { item.drop }
                      data ={ item.data }
                      path = { item.img }
                      pathTarget = { item.imgTarget }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />

                    <div className = 'boxCheck pAbs d-Flex j-C aI-C dNone' style = {{ 'top': item.posY, 'left': item.posX }} id = { 'boxCheck-' + item.drop }>
                      <img
                        alt = 'Img'
                        className = { ''}
                        id = {''}
                        src = { item.imgTarget } />
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div>
            <img
              alt = 'Img'
              className = { 'pathImg pAbs'}
              id = {'pathImg'}
              src = { multimedia.dragBg.url }
              style = {{ 'top': multimedia.dragBg.posY, 'left': multimedia.dragBg.posX }} />
            {
              multimedia.dragItem.map( (item, i) => {
                return(
                  <div key = { item.id } className = { this.state.actualItem !== item.id ? '' : '' }>
                    <DragItem
                      id = { item.id }
                      name = { item.text }
                      type = { item.type }
                      countDrag = { this.countDrag } />
                  </div>
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

// <ModalInfo3 dataPage = { multimedia.InfoFinal } hideModal2 = { this.hideModalFinal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

export default DraggableZigZag;
