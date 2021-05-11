import React, { Component } from 'react';
import DraggableWordBox from './DraggableWordBox';
import Instruction from './Instruction';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalDnD2.scss';

library.add(fas, fab, far);

class ModalDnD2 extends Component {
  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone');
  }

  state = {
    page: 0
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    this.props.showModal();
  }

  //Quitar el dNone
  removedNone = () => {
    document.querySelector('#boxPopUp-1').classList.remove('dNone');
    document.querySelector('#btnClose-1').classList.remove('dNone');
    this.props.isEnded(true);
  }

  render() {
    const { multimedia, isEnded, instruction } = this.props;
    return (
      <div className = 'ModalDnD2 animated fadeIn'>
        <div className = 'DnDContent mL-025 mR-025'>
          <DraggableWordBox multimedia = { multimedia } isEnded = { isEnded } />
        </div>

        <Instruction dataPage = { instruction } />

        <button
          className = 'buttonClose'
          onClick = { this.hideModal }
          id = 'btnClose-1'
          >
          <span className = 'fa-layers fa-fw iconButton' >
            <FontAwesomeIcon icon="circle" />
            <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
          </span>
        </button>
      </div>
    );
  }
}

export default ModalDnD2;
