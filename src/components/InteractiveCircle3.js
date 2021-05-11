import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveCircle3.scss';

library.add(fas, fab, far);

class InteractiveCircle3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  // <div className = 'circleItems' key = { i } style = { { 'top': item.pos.top, 'left': item.pos.left } }>

  showItems = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage.map( (item, i) => {
      return(
        <div className = 'circleItems d-Flex d-C j-C aI-C c-15' key = { i } >
          <button className = { 'circleButton mB-05 fw-7 ' + ( i + 1 !== 1 ? 'disabledGray' : '')} id = { i + 1 } onClick = { this.enableItem }>{ item.text }</button>
          <p className = { 'fw-7 F08em ' + ( i + 1 !== 1 ? 'op-0' : '')} id = { 'pId' + (i + 1) } dangerouslySetInnerHTML = { { __html: item.text2 } }></p>
        </div>
      );
    } );
    return ITEM;
  }

  enableItem = (e) => {
    const { multimediaCircular } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.target.id;
    let idItem = parseInt(IDITEM);

    document.getElementById(idItem).classList.add('visited');

    if (idItem <= multimediaCircular.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({ actualItem : idItem });
        if (idItem !== multimediaCircular.length) {
          let nextItem = document.getElementById(idItem + 1);
          let nextItemP = document.getElementById('pId' + (idItem + 1));
          nextItem.classList.remove('disabledGray');
          nextItemP.classList.remove('op-0');
          this.setState({ countItem: this.state.countItem + 1 });
        } else {
          this.setState({ countItem: this.state.countItem + 1 });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }
    }

    if (this.state.countItem === multimediaCircular.length) {
      this.setState({ countItem: multimediaCircular.length });
    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => { this.showGlobe(); }

  render() {
    const { multimediaCircular } = this.props.dataPage;
    const { actualItem } = this.state;
    // console.log(this.state.countItem);
    return (
      <div className = 'interactiveCircle3 d-Flex j-Ar aI-C bg-StoyrLine c-75 mL-3'>
        {
          // MOSTRAR LOS GLOBOS DE TEXTO
          this.state.openGlobe !== false ?
          <div className = 'bgItemGlobe'>
            <div
              className = { 'itemGlobe d-Flex j-C aI-C animated ' + (multimediaCircular[actualItem - 1].itemInfo.posTriang)}
              style = { { 'width': multimediaCircular[actualItem - 1].itemInfo.posGlobe.size, 'top': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posY, 'left': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posX } }>

              <h3 className = 'F4-5 color-4 mR-025 op-5'>{ multimediaCircular[actualItem - 1].itemInfo.title }</h3>

              <div className = 'scrollText'>
                <p className = 'mB-05 color-4' dangerouslySetInnerHTML = { { __html: multimediaCircular[actualItem - 1].itemInfo.text } } />
              </div>
              {
                multimediaCircular[actualItem - 1].itemInfo.img  ? <img alt = 'Imagen' className = 'image' src = { multimediaCircular[actualItem - 1].itemInfo.img } style = {{ "width": '100%' }}/> : null
              }
              { multimediaCircular[actualItem - 1].itemInfo.buttonClose.closedModal === true ?
                <button
                  className = 'buttonClose'
                  onClick = { this.hideModal }
                  style = { { 'top': multimediaCircular[actualItem - 1].itemInfo.buttonClose.posY, 'right': multimediaCircular[actualItem - 1].itemInfo.buttonClose.posX } }
                  >
                  <span className = 'fa-layers fa-fw iconButton' >
                    <FontAwesomeIcon icon="circle" />
                    <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                  </span>
                </button> : null
              }
            </div>
          </div> : null
        }

        { this.showItems() }
      </div>
    );
  }
}

export default InteractiveCircle3;
