import React, { Component } from 'react';
import DraggableZigZag from './DraggableZigZag';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalDnD1.scss';

library.add(fas, fab, far);

class ModalDnD1 extends Component {
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
    const { multimedia, isEnded } = this.props;
    return (
      <div className = 'ModalDnD1 animated fadeIn'>
        <div className = 'DnDContent mL-025 mR-025'>
          <DraggableZigZag multimedia = { multimedia } isEnded = { isEnded } />
        </div>

        <button
          className = 'buttonClose'
          onClick = { this.hideModal }
          id = 'btnClose-1'
          >
          <span className = 'fa-layers fa-fw iconButton' >
            <FontAwesomeIcon icon="times" inverse transform="shrink-1" />
          </span>
        </button>
      </div>
    );
  }
}

export default ModalDnD1;
