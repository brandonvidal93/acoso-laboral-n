import React, { Component } from 'react';
import MenuCourse from './MenuCourse';
import ModalVideo from '../../components/ModalVideo';
import ModalInteractive from '../../components/ModalInteractive';
import ModalDnD1 from '../../components/ModalDnD1';
import ModalDnD2 from '../../components/ModalDnD2';
import ModalImg from '../../components/ModalImg';
import Instruction from '../../components/Instruction';
import ChatPhone from '../../components/ChatPhone';
// import InteractiveAudio from '../../components/InteractiveAudio';
// import InteractiveCircle from '../../components/InteractiveCircle';
import InteractiveCircle2 from '../../components/InteractiveCircle2';
import InteractiveCircle3 from '../../components/InteractiveCircle3';
import InteractiveCircle4 from '../../components/InteractiveCircle4';
// import InteractivePath from '../../components/InteractivePath';
// import InteractivePiramid from '../../components/InteractivePiramid';
// import InteractiveCircleModal from '../../components/InteractiveCircleModal';
// import DraggableCircle from '../../components/DraggableCircle';
// import DraggableZigZag from '../../components/DraggableZigZag';
// import DraggableWords from '../../components/DraggableWords';
// import DraggableWordBox from '../../components/DraggableWordBox';
// import ModalCircle from '../../components/ModalCircle';
// import ModalCircleInfo from '../../components/ModalCircleInfo';
// import InteractiveFlip from '../../components/InteractiveFlip';
// import InteractiveFlipIcon from '../../components/InteractiveFlipIcon';
// import Slides from '../../components/Slides';
// import SlidesUpDown from '../../components/SlidesUpDown';
// import SliderDot from '../../components/SliderDot';
// import Pairing from '../../components/Pairing';
// <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
// <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>

import './Pages.scss';

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

    //
    //

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-4 animated fadeIn' }>
        <div className="box-bg-1">
          <img alt = 'Imagen Bg' className = 'pAbs bg-Universe' src = { dataPage.background.bg }/>
          <img alt = 'Imagen Bg' className = 'pAbs stars blink-3' src = { dataPage.background.stars }/>
          <img alt = 'Imagen Bg' className = 'pAbs nebulosa-1 blink-1' src = { dataPage.background.nebulosa1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs nebulosa-2 blink-2' src = { dataPage.background.nebulosa2 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-1 jumpWiggle-1' src = { dataPage.background.planet1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-2 jumpWiggle-2' src = { dataPage.background.planet2 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-3 jumpWiggle-3' src = { dataPage.background.planet3 }/>
          <img alt = 'Imagen Bg' className = 'pAbs linea-1 blink-4' src = { dataPage.background.line1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs book-1 float-2' src = { dataPage.background.book1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs rocket-1 move-1' src = { dataPage.background.rocket1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs astroneer-1 float-1' src = { dataPage.background.astroneer1 }/>
        </div>

        <div className="c-45 dF-C-cs">
          <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-4 mB-5'
            src = { dataPage.logoCourse }/>

          <h1 className = 'mB-05 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          <h2 className = 'fw-4'>{ dataPage.subTitle }</h2>
          <hr className = 'line-2 mB-1 c-2' />
          <h3 className = 'mB-1 fw-7'>{ dataPage.module }</h3>
          <p className = 'mB-5 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p>

          <button
            className = 'buttonStart pT-05 pB-05'
            id = 'btnStart'
            onClick = { this.startCourse }>
            { dataPage.buttonStart }
          </button>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class Page1 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    // const { checkEndActivity, checkEnabledUnit } = this.props;
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(1, end);
    // checkEnabledUnit(4)
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className=''>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <InteractiveCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page2 extends Component {
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

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-7'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 d-Flex j-S aI-E c-10'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 c-25 mL-1'>
              <h3 className = ''>{ boxInfo.title }</h3>
              <hr className = 'line-3 mT-1 mB-1 c-3'/>
              <p className = ''>{ boxInfo.text }</p>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page3 extends Component {
  render() {
    const { dataPage, goToPage, menuPosition, unitActual, updateActualUnit, unitFinal, enableUnit, iPosXBike, iPosYBike } = this.props;
    const { Units } = this.props.dataPage;
    return (
      <div className = { 'pageContent ' + (dataPage.type) + ' animated fadeIn'}>
        { /* LLAMADO DEL COMPONENTE MENU */ }
        <MenuCourse
          dataPage = { dataPage }
          goToPage = { goToPage }
          menuPosition = { menuPosition }
          Units = { Units }
          unitActual = { unitActual }
          updateActualUnit = { updateActualUnit }
          unitFinal = { unitFinal }
          enableUnit = { enableUnit }
          iPosXBike = { iPosXBike }
          iPosYBike = { iPosYBike } />

        <div className="c-4 dF-C-cs mL-2 mT-3 pAbs" style =  {{ 'top': 280 }}>
          <hr className = 'line-2 mB-1 c-3' />
          <h2 className = 'mB-05 fw-7'>{ dataPage.title }</h2>
          <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
          <p className = 'fw-7' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }}></p>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> <Instruction dataPage = { dataPage.instruction } /> */ }
        </div>


      </div>
    );
  }
}

class Page4 extends Component {
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
    document.querySelector('.footer').classList.add('dNone');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalImg dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-55'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <InteractiveCircle3 dataPage = { dataPage } isEnded = { this.isEnded } />

        <div className = 'column-2 bg-circle-1 d-Flex j-C aI-C mL-2 c-4 pAbs' style = {{ 'top': 477 }}>
          <button className = 'buttonVideo mR-1' onClick = { this.showModal }>
            <img
              alt = 'Imagen Corporativa'
              className = 'imageFooter'
              src = { boxInfo.imgBg }/>
          </button>
          <p>{ boxInfo.text }</p>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page5 extends Component {
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
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-65'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 d-Flex j-S aI-E c-10'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 c-25 mL-1'>
              <h3 className = ''>{ boxInfo.title }</h3>
              <hr className = 'line-3 mT-1 mB-1 c-3'/>
              <p className = ''>{ boxInfo.text }</p>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page6 extends Component {
  state = {
    openModal: false,
    openModal2: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
      // warningAnimation: !this.state.warningAnimation
    });
  }
  // FUNCION PARA ABRIR MODAL
  showModal2 = () => {
    this.setState({
      openModal2: !this.state.openModal2
      // warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);
  }

  componentDidMount() {
    this.props.checkEnabledUnit(1);
    this.props.checkEndUnit(0);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo, boxInfo2 } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalInteractive multimedia={ dataPage.multimedia.book1 } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }
        { this.state.openModal2 !== false ? <ModalInteractive multimedia={ dataPage.multimedia.book2 } showModal={ this.showModal2 } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-4'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <div className = 'two-column dF-R-cc aI-E bg-particles pL-2 pR-2 c-65'>
          <div className = 'column-1 d-Flex d-C j-C aI-C'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = ''
                src = { boxInfo.imgBg }/>
            </button>

            <div className = 'boxInfo-1 mT-3'>
              <h3 className = ''>{ boxInfo.title }</h3>
            </div>
          </div>
          <div className = 'column-2 d-Flex d-C j-C aI-C'>
            <button className = 'buttonVideo' onClick = { this.showModal2 }>
              <img
                alt = 'Imagen'
                className = ''
                src = { boxInfo2.imgBg }/>
            </button>

            <div className = 'boxInfo-1 mT-1'>
              <h3 className = ''>{ boxInfo2.title }</h3>
            </div>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page7 extends Component {
  componentDidMount() {
    this.props.checkEnabledUnit(2);
    this.props.checkEndUnit(1);
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-55'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <ChatPhone dataPage = { dataPage } isEnded = { this.isEnded } ></ChatPhone>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page8 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(8, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-5'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <InteractiveCircle4 dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page9 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
      // warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(9, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalDnD1 multimedia={ dataPage.multimedia } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-7'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>

          <div className = 'section-title d-Flex d-C mT-7 mL-2 c-3'>
            <hr className = 'mB-1 line-2 c-3'></hr>
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }} />
          </div>

          <div className = 'two-column dF-R-cc aI-E bg-particles pL-2 pR-2 c-5 pAbs' style = {{ 'top': 220, 'left': 310 }}>
            <div className = 'column-1 d-Flex d-C j-C aI-C c-10'>
              <button className = 'buttonVideo' onClick = { this.showModal }>
                <img
                  alt = 'Imagen'
                  className = ''
                  src = { boxInfo.imgBg }/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Page10 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal
      // warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(10, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalDnD2 multimedia={ dataPage.multimedia } instruction = { dataPage.instruction } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-65'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>

          <div className = 'section-title d-Flex d-C mT-6 mL-2 c-2'>
            <hr className = 'mB-1 line-4 c-4'></hr>
            <h3 className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }} />
          </div>
        </div>

        <div className = 'two-column dF-R-cc aI-E bg-particles pL-2 pR-2 c-5 pAbs' style = {{ 'top': 260, 'left': 230 }}>
          <div className = 'column-1 d-Flex d-C j-C aI-C c-10'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen'
                className = ''
                src = { boxInfo.imgBg }/>
            </button>
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
    checkEndActivity(11, end);
  }

  componentDidMount() {
    this.props.checkEndUnit(2);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className='dF-C-ss'>
          <div className = 'section-title d-Flex d-C mT-3 mL-2 c-65'>
            <hr className = 'mB-1 line-2 c-2'></hr>
            <h2 className = 'mB-1' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
        </div>

        <div className = 'two-column dF-R-cc bg-particles pL-2 pR-2'>
          <div className = 'column-1 d-Flex j-S aI-E c-5'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page12 extends Component {
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

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-4 animated fadeIn' }>
        <div className="box-bg-1">
          <img alt = 'Imagen Bg' className = 'pAbs bg-Universe' src = { dataPage.background.bg }/>
          <img alt = 'Imagen Bg' className = 'pAbs stars blink-3' src = { dataPage.background.stars }/>
          <img alt = 'Imagen Bg' className = 'pAbs nebulosa-1 blink-1' src = { dataPage.background.nebulosa1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs nebulosa-2 blink-2' src = { dataPage.background.nebulosa2 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-1 jumpWiggle-1' src = { dataPage.background.planet1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-2 jumpWiggle-2' src = { dataPage.background.planet2 }/>
          <img alt = 'Imagen Bg' className = 'pAbs planet-3 jumpWiggle-3' src = { dataPage.background.planet3 }/>
          <img alt = 'Imagen Bg' className = 'pAbs linea-1 blink-4' src = { dataPage.background.line1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs book-1 float-2' src = { dataPage.background.book1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs rocket-1 move-1' src = { dataPage.background.rocket1 }/>
          <img alt = 'Imagen Bg' className = 'pAbs astroneer-1 float-1' src = { dataPage.background.astroneer1 }/>
        </div>

        <div className="c-45 dF-C-cs">
          <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-4 mB-5'
            src = { dataPage.logoCourse }/>

          <h1 className = 'mB-05 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          <h2 className = 'fw-4'>{ dataPage.subTitle }</h2>
          <hr className = 'line-2 mB-1 c-2' />
          <h3 className = 'mB-1 fw-7'>{ dataPage.module }</h3>
          <p className = 'mB-5 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p>

          <p className = 'bg-color-2 pT-05 pB-05 pL-1 pR-1 color-4' style = { { 'borderRadius': 15 } }>
            { dataPage.buttonStart }
          </p>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
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
  Page12 };

  // style={ this.firstChild( e.id ) }
