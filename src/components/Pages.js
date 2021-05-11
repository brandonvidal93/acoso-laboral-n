import React, { Component } from 'react';
// import MenuCourse from './MenuCourse';
import ModalVideo from '../../components/ModalVideo';
// import ModalInteractive from '../../components/ModalInteractive';
// import ModalDnD1 from '../../components/ModalDnD1';
// import ModalDnD2 from '../../components/ModalDnD2';
// import ModalImg from '../../components/ModalImg';
import Instruction from '../../components/Instruction';
// import ChatPhone from '../../components/ChatPhone';
// import InteractiveAudio from '../../components/InteractiveAudio';
// import InteractiveCircle from '../../components/InteractiveCircle';
// import InteractiveCircle2 from '../../components/InteractiveCircle2';
// import InteractiveCircle3 from '../../components/InteractiveCircle3';
// import InteractiveCircle4 from '../../components/InteractiveCircle4';
// import InteractivePath from '../../components/InteractivePath';
// import InteractivePiramid from '../../components/InteractivePiramid';
// import InteractiveCircleModal from '../../components/InteractiveCircleModal';
// import DraggableCircle from '../../components/DraggableCircle';
// import DraggableZigZag from '../../components/DraggableZigZag';
// import DraggableWords from '../../components/DraggableWords';
import DraggableWordBox from '../../components/DraggableWordBox';
// import ModalCircle from '../../components/ModalCircle';
// import ModalCircleInfo from '../../components/ModalCircleInfo';
// import InteractiveFlip from '../../components/InteractiveFlip';
// import InteractiveFlipIcon from '../../components/InteractiveFlipIcon';
// import Slides from '../../components/Slides';
// import SlidesUpDown from '../../components/SlidesUpDown';
// import SliderDot from '../../components/SliderDot';
// import Pairing from '../../components/Pairing';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
// <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>

import './Pages.scss';

library.add(fas, fab, far);

class Cover extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  // isEnded = (end) => {
  //   const { checkEndActivity } = this.props;
  //   // console.log('Recibí: ' + end);
  //   checkEndActivity(0, end);
  // }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  render() {
    const { dataPage } = this.props;
    // const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);
    // <hr className = 'line-2 mB-1 c-2' />
    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-3 animated fadeIn' } style = { style }>
        <div className="c-6 d-Flex d-C j-E aI-S pT-7 mT-6">
          {
            dataPage.logoCourse ? <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo'
              src = { dataPage.logoCourse }/> : null
          }
          {
            dataPage.title ? <h1 className = 'mT-6 mB-05 fw-7 color-4 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
          }
          {
            dataPage.subTitle ? <h3 className = 'fw-5 color-4 mB-05' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></h3> : null
          }
          {
            dataPage.module ? <h3 className = 'mB-1 fw-7' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></h3> : null
          }
          {
            dataPage.courseName ? <p className = 'mB-2 fw-5 color-4' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p> : null
          }

          <button
            className = 'buttonStart pT-05 pB-05 F1-3 dF-R-cc'
            id = 'btnStart'
            onClick = { this.startCourse }>
            { dataPage.buttonStart }
            <FontAwesomeIcon className = 'mL-05' icon={[ 'fas', 'chevron-right' ]} />
          </button>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class Page1 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='pT-4'>
          <div className = 'section-title d-Flex j-C aI-S mT-7 mL-2 c-9'>
            <div className = 'c-5 d-Flex d-C j-C aI-S mL-3'>
              <h2 className = 'F5 color-1' dangerouslySetInnerHTML = {{ __html: dataPage.jumboText1 }} />

              <Instruction dataPage = { dataPage.instruction } />
            </div>

            <div className = 'd-Flex j-C aI-C c-5 mL-7 mT-5'>
              <button className = 'buttonVideo' onClick = { this.showModal }>
                <img
                  alt = 'Imagen Corporativa'
                  className = 'imageFooter'
                  src = { boxInfo.imgBg }/>
              </button>

              <div className = 'boxInfo-1 mL-1 d-Flex d-C j-C aI-S'>
                <h3 className = ''>{ boxInfo.title }</h3>
                <p className = ''>{ boxInfo.text }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Page2 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className='pT-4'>
          <div className = 'section-title d-Flex j-S aI-S c-9'>
            <div className = 'c-5 d-Flex d-C j-C aI-S mL-3'>
              <h2 className = '' dangerouslySetInnerHTML = {{ __html: dataPage.jumboText1 }} />

              <Instruction dataPage = { dataPage.instruction } />
            </div>
          </div>

          <div className = 'dndZone c-9'>

          </div>
        </div>
      </div>
    );
  }
}

class Page3 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page4 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page5 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page6 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page7 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className="pageContent animated fadeIn" style={style}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? (
          <ModalVideo dataModal = { dataPage } showModal = { this.showModal } isEnded = { this.isEnded } /> ) : null }

        <div className="pT-4">
          <div className="section-title d-Flex j-C aI-S mT-7 mL-2 c-9">
            <div className="c-5 d-Flex d-C j-C aI-S mL-3 mT-2">
              <h2 className="fw-5 mB-1" dangerouslySetInnerHTML = { { __html: dataPage.jumboText1 } } />

              { dataPage.text1 ? ( <p className="mB-2" dangerouslySetInnerHTML = { { __html: dataPage.text1 } } ></p> ) : null }

              <Instruction dataPage={dataPage.instruction} />
            </div>

            <div className="d-Flex j-C aI-C c-5 mL-7 mT-5">
              <button className="buttonVideo" onClick={this.showModal}>
                <img
                  alt="Imagen Corporativa"
                  className="imageFooter"
                  src={boxInfo.imgBg}
                />
              </button>

              <div className="boxInfo-1 mL-1 d-Flex d-C j-C aI-S">
                <h3 className="">{boxInfo.title}</h3>
                <p className="">{boxInfo.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Page8 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page9 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page10 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page11 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return (
      <div className="pageContent animated fadeIn" style={style}>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? (
          <ModalVideo dataModal = { dataPage } showModal = { this.showModal } isEnded = { this.isEnded } /> ) : null }

        <div className="pT-4">
          <div className="section-title d-Flex j-C aI-S mT-7 mL-2 c-9">
            <div className="c-5 d-Flex d-C j-C aI-S mL-3 mT-2">
              <h2 className="fw-5 mB-1" dangerouslySetInnerHTML = { { __html: dataPage.jumboText1 } } />

              { dataPage.text1 ? ( <p className="mB-2" dangerouslySetInnerHTML = { { __html: dataPage.text1 } } ></p> ) : null }

              <Instruction dataPage={dataPage.instruction} />
            </div>

            <div className="d-Flex j-C aI-C c-5 mL-7 mT-5">
              <button className="buttonVideo" onClick={this.showModal}>
                <img
                  alt="Imagen Corporativa"
                  className="imageFooter"
                  src={boxInfo.imgBg}
                />
              </button>

              <div className="boxInfo-1 mL-1 d-Flex d-C j-C aI-S">
                <h3 className="">{boxInfo.title}</h3>
                <p className="">{boxInfo.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Page12 extends Component {
  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className = 'pageContent animated fadeIn' style = { style }>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.type }} />
          </div>
        </div>
      </div>
    );
  }
}

class Page13 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y FINALIZAR EL CURSO
  endCourse = e => {
    e.preventDefault();
    this.props.endCourse();
  }

  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(17);
  }

  render() {
    const { dataPage } = this.props;
    // const { boxInfo } = this.props.dataPage;
    // <hr className = 'line-2 mB-1 c-2' />

    const style = {
      backgroundImage: 'url(' + dataPage.background.bg + ')',
      backgroundSize: 'cover'
    }

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' dF-R-sc pL-3 animated fadeIn' } style = { style }>
        <div className="c-5 dF-C-cs mB-4">
          {
            dataPage.title ? <h1 className = 'mB-1 fw-5 color-1 F3' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1> : null
          }
          {
            dataPage.subTitle ? <h3 className = 'fw-5 mB-2 color-18' dangerouslySetInnerHTML = {{ __html: dataPage.subTitle }}></h3> : null
          }
          {
            dataPage.module ? <p className = 'mB-1 color-18' dangerouslySetInnerHTML = {{ __html: dataPage.module }}></p> : null
          }
          {
            dataPage.courseName ? <p className = 'mB-2 color-1' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p> : null
          }

          <p className = 'bg-color-19 pT-1 pB-1 pL-2 pR-2 color-4 F1' style = { { 'borderRadius': 50 } }>
            { dataPage.msjInfo }
          </p>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

        <div className="c-5 dF-R-cc mB-4">
          {
            dataPage.logoCourse ? <img
              alt = 'Imagen Corporativa'
              className = 'imageLogo'
              src = { dataPage.logoCourse }/> : null
          }
        </div>
      </div>
    );
  }
}

export {
  Cover, Page1, Page2,
  Page3, Page4, Page5,
  Page6, Page7, Page8,
  Page9, Page10, Page11,
  Page12, Page13 };

  // style={ this.firstChild( e.id ) }
