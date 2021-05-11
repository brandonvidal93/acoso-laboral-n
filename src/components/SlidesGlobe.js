import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './SlidesGlobe.scss';

library.add(fas, fab, far);

class Slides extends Component {
  state = {
    page: 1,
    popUp: 0
  }

  mSlides = e => {
    const { dataPage } = this.props;
    if (e.currentTarget.id === 'btnAnt') {
      this.setState({
        page: this.state.page - 1
      });
    }
    if (e.currentTarget.id === 'btnSig') {
      this.setState({
        page: this.state.page + 1
      });
      // console.log(this.state.page);
      document.getElementById('btnSig').classList.add('disabled');
    }
  }

  showModal = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage[this.state.page - 1].id;

    this.setState({
      popUp: this.state.popUp + 1
    });

    document.getElementById('globe-' + ITEM).classList.remove('dNone');
    document.getElementById('bgItemGlobe' + ITEM).classList.remove('dNone');

    console.log('ITEM: ' + ITEM);
    console.log('dataPage.length: ' + dataPage.length);
    console.log('pages: ' + this.state.page);
    console.log('popUp: ' + this.state.popUp);

    if (this.state.page === dataPage.length && this.state.popUp >= dataPage.length - 1) {
      console.log('Funcionó :D');
      this.props.isEnded(true);
    }
  }

  hideModal = () => {
    const { dataPage } = this.props;
    const ITEM = dataPage[this.state.page - 1].id
    document.getElementById('globe-' + ITEM).classList.add('dNone');
    document.getElementById('bgItemGlobe' + ITEM).classList.add('dNone');
    document.getElementById('btnSig').classList.remove('disabled');
  }

  render() {
    // console.log(this.props.dataPage[this.state.page - 1] );
    // console.log(this.state.page);
    // + (item.id !== this.state.page ? 'dNone' : '')
    const { dataPage } = this.props;
    return (
      <div className = 'slides d-Flex j-C aI-C'>
        <div className = 'buttons dF-R-cc mR-4'>
          <button className = { 'buttonSlide ' + (this.state.page === 1 ? 'disabled' : 'pulse-2') } id = 'btnAnt' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-left" size = 'lg' />
          </button>
        </div>

        <div className = {'animated fadeIn mR-3 ' + (this.state.page - 1 === 0 ? 'prevItemNone' : 'prevItem')}>
          <div className = {'globe d-Flex j-C aI-C'}>
            <p>
              { this.state.page - 1 }
            </p>
          </div>
        </div>

        {
          dataPage.map((item, i) =>
          <div key = { item.id }>
            <div className = { 'itemInfo dF-C-cs ' + (item.id !== this.state.page ? 'dNone' : '') } id = { item.id } >
              <button className = { 'globeNumber' } id = { 'globeNumber-' + item.id } onClick = { this.showModal }>
                { item.id }
              </button>
            </div>
          </div>
          )
        }

        <div className = {'animated fadeIn mL-3 ' + (this.state.page === dataPage.length ? 'postItemNone' : 'postItem')}>
          <div className = {'globe d-Flex j-C aI-C'}>
            <p>
              { this.state.page + 1 }
            </p>
          </div>
        </div>

        {
          dataPage.map((item, i) =>
          <div className = {'bgItemGlobe dNone ' } key = { item.id } id = {'bgItemGlobe' + item.id }>
            <div className = { 'itemGlobe triang-izq animated fadeInDown dNone'} style = { { 'width': dataPage[this.state.page - 1].itemInfo.posGlobe.size, 'top': dataPage[this.state.page - 1].itemInfo.posGlobe.posY, 'left': dataPage[this.state.page - 1].itemInfo.posGlobe.posX } } id = { 'globe-' + item.id }>
              <p className = 'color-5' dangerouslySetInnerHTML = { { __html: item.itemInfo.text } } />
              <button
                className = 'buttonClose'
                onClick = { this.hideModal }
                style = { { 'top': dataPage[this.state.page - 1].itemInfo.buttonClose.posY, 'right': dataPage[this.state.page - 1].itemInfo.buttonClose.posX } }
                >
                <span className = 'fa-layers fa-fw iconButton' >
                  <FontAwesomeIcon icon="circle" />
                  <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                </span>
              </button>
            </div>
          </div>
          )
        }

        <div className = 'buttons dF-R-cc mL-4'>
          <button className = { 'buttonSlide disabled ' + (this.state.page === dataPage.length ? 'disabled3' : 'pulse-2') } id = 'btnSig' onClick = { this.mSlides }>
            <FontAwesomeIcon className = 'iconButton' icon="chevron-right" size = 'lg' />
          </button>
        </div>
      </div>
    );
  }
}

export default Slides;
