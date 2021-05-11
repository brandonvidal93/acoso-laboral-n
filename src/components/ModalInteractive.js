import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInteractive.scss';

library.add(fas, fab, far);

class ModalInteractive extends Component {
  componentDidMount() {
    document.querySelector('.footer').classList.add('dNone');
  }

  state = {
    page: 0
  }

  // mSlides = e => {
  //   const { multimedia } = this.props;
  //   if (e.currentTarget.id === 'btnAnt') {
  //     this.setState({
  //       page: this.state.page - 1
  //     });
  //   }
  //   if (e.currentTarget.id === 'btnSig') {
  //     this.setState({
  //       page: this.state.page + 1
  //     });
  //
  //     // console.log(this.state.page);
  //
  //     if (this.state.page === multimedia.book1.length - 1) {
  //       this.props.isEnded(true);
  //     }
  //   }
  // }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    document.querySelector('.footer').classList.remove('dNone');
    this.props.showModal();
    // this.props.showModal2();
  }

  //Quitar el dNone
  removedNone = () => {
    document.querySelector('#boxPopUp-1').classList.remove('dNone');
    document.querySelector('#btnClose-1').classList.remove('dNone');
    this.props.isEnded(true);
  }

  render() {
    const { multimedia } = this.props;
    console.log(multimedia);
    return (
      <div className = 'ModalInteractive animated fadeIn'>
        <div className = 'bgBook mL-025 mR-025'>
          <FlipPage orientation = 'horizontal' width = '920' height = '615'>
          <article>
            <div className = 'd-Flex d-C j-C aI-S pT-3 pL-3 pB-3 pR-3'>
              <div className = 'mB-2'>
                <hr className = 'line-2 c-3 mB-1' />
                <h1>Arrastra las páginas con clic sostenido de derecha a izquierda para visualizar toda la historieta.</h1>
              </div>
            </div>
          </article>
            <article>
              <div className = 'd-Flex j-C aI-C '>
                <div className = 'pagina-1'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[0].page1 }/>
                </div>
                <div className = 'pagina-2'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[0].page2 }/>
                </div>
              </div>
            </article>
            <article>
              <div className = 'd-Flex j-C aI-C '>
                <div className = 'pagina-1'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[1].page1 }/>
                </div>
                <div className = 'pagina-2'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[1].page2 }/>
                </div>
              </div>
            </article>
            <article>
              <div className = 'd-Flex j-C aI-C '>
                <div className = 'pagina-1'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[2].page1 }/>
                </div>
                <div className = 'pagina-2'>
                  <img
                    alt = 'Imagen'
                    className = ''
                    src = { multimedia[2].page2 }/>
                </div>
              </div>
            </article>
            <article>
              <div className = 'd-Flex d-C j-C aI-S pT-3 pL-3 pB-3 pR-3'>
                <div className = 'mB-2'>
                  <hr className = 'line-2 c-3 mB-1' />
                  <h1 dangerouslySetInnerHTML = {{ __html: multimedia[3].title }} />
                </div>
                <button
                  className = 'button-1 pT-025 pL-1 pB-025 pR-1 mB-2'
                  onClick = { this.removedNone } >
                  Clic aquí
                </button>
                <div className = 'd-Flex d-C j-C aI-S pT-3 pL-3 pB-3 pR-3 c-5 boxPopUp-1 dNone bgGradient' id = 'boxPopUp-1'>
                  <p className = 'mB-1 color-4' dangerouslySetInnerHTML = {{ __html: multimedia[3].text1 }} />
                  <h2 className = 'color-4' dangerouslySetInnerHTML = {{ __html: multimedia[3].text2 }} />
                </div>

                <button
                  className = 'buttonClose dNone'
                  onClick = { this.hideModal }
                  id = 'btnClose-1'
                  >
                  <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon icon="circle" />
                    <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                  </span>
                </button>
              </div>
            </article>
          </FlipPage>
        </div>
      </div>
    );
  }
}

export default ModalInteractive;
