import React, { Component } from 'react';
import Content from './sections/Content';
// import BackCover from './sections/BackCover';
// import FinishUnit from './sections/FinishUnit';

// SCORM
import Tracking from './SCORM/Trackin';
import SCORMLib from './SCORM/scormLib';

// ESTILOS
import './App.scss';

// DATOS
import DataCourse from './data/data.json';

// DEFINICION DEL LIMITE CON LA CANTIDAD DE OBJETOS QUE HAY EN DataCourse
// SE RESTAN 0 al LIMIT PARA SACAR EL BACK COVER QUE ES UNA MODAL DE FINALIZACION
const LIMIT = Object.keys(DataCourse).length;
const UNITS = DataCourse.coverPage.units;
const LABELFOOTER = DataCourse.coverPage.footer.label;
const BGFOOTER = DataCourse.coverPage.footer.bgImgs;
const LOGOCOURSE = DataCourse.coverPage.footer.logoFooter;

const tracking = new Tracking(new SCORMLib(), LIMIT);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseEnd: false,
      units: UNITS,
      unitActual: 1,
      nextUnit: 1,
      pages: LIMIT,
      pagesTracking: [],
      index: 0,
      progress: 0,
      menuPosition: 125,
      conectLMS: false,
      lastPage: false,
      unitFinal: [false, false, false],
      // unitFinal: [true, true, true],
      enableUnit: [true, false, false],
      // enableUnit: [true, true, true],
      // endActivities debe ir en FALSE para permitir las restricciones, en TRUE para editar
      // endActivities: [true, true, true, true, true, true, true, true, true, true, true, true, true, true]
      endActivities: [true, false, false, false, false, true, false, false, false, false, false, false, true, true],
      // restrictPage: [true, false, false, false, false, false, false, false, false, false, false, false, true, true]
      restrictPage: [false, true, true, true, true, false, true, true, true, true, true, true, false, false]
    }
  }

  // METODOS DEL SCORM
  componentDidMount() {
    let initialPos = 0;

    // POSICION GUARDADA EN EL SCORM
    initialPos = tracking.getLocation();
    // console.log(tracking);

    // SINO HAY POSICIONES GUARDADAS
    if (initialPos === 0) {
      tracking.push(1);
    }

    if (initialPos > 1 && initialPos < LIMIT) {
      this.setState({
        index: initialPos
      });
    }

    if (initialPos === LIMIT) {
      this.setState({
        index: initialPos,
        courseEnd: true
      });
    }

    this.config();
  }

  config() {
    window.addEventListener('beforeunload', () => {
      tracking.exit(); // GUARADADO DE LA INFORMACION AL CERRAR EL PAQUETE
    });
  }

  /////////////////////////////////////////////////////////// Calificación INVOCADA CUANDO SE COMPLETAN ACTIVIDADES O SE AVANZA DE PAGINA
  setScore(raw) {
    console.log('Recibo: ' + raw);
    tracking._scoreSet(raw);
  }
 ///////////////////////////////////////////////////////////

  // METODO DE SEGUIMIENTO - SOLO DE VISUALIZACIÓN
  _stateCourse() {
    console.clear();
    const messageState = ` SEGUIMIENTO DEL CURSO
    - Curso Terminado        -> ${ this.state.courseEnd }
    - Unidades o Temas       -> ${ this.state.units }
    - Unidad Actual          -> ${ this.state.unitActual }
    - Siguiente Unidad       -> ${ this.state.nextUnit }
    - Páginas                -> ${ this.state.pages }
    - Páginas Visitadas      -> ${ this.state.pagesTracking }
    - Index                  -> ${ this.state.index }
    - Porcentaje de progreso -> ${ this.state.progress }
    - Posición del Menú      -> ${ this.state.menuPosition }
    - Conectado a un LMS     -> ${ this.state.conectLMS }
    - Actividades END        -> ${ this.state.endActivities }
    - Restrict PAGE          -> ${ this.state.restrictPage }
    - Unidades END           -> ${ this.state.unitFinal }
    - LIMIT                  -> ${ this.state.pages } `;
    console.log(messageState);
    console.log();
  }

  // FUNCION PARA ACTUALIZAR EL INDEX Y NAVEGAR RECIBE PARAMETRO DE FOOTER EL ID DEL BOTON
  navigationCourse = (buttonPress) => {
    console.log('Recibo en App.js', buttonPress);
    var goMenu;

    //SCORM
    if (this.state.index < 0) {
      this.setState({
        index: 0
      })
    }
    // VALIDACIONES DE LOS BOTONES ANTERIOR Y SIGUIENTE
    if (buttonPress === 'btnNavLeft') {
      this.setState({ index: this.state.index - 1 });
      tracking.push(this.state.index);
      tracking.saveLocation(this.state.index);
    }

    // VALIDACIONES DE LOS BOTONES SIGUIENTE Y BOTON INICIO CURSO
    if (buttonPress === 'btnNavRight' || buttonPress === 'btnStart') {
      this.setState({ index: this.state.index + 1 });
      tracking.push(this.state.index); // GUARDAR AVANCE DE PAGINA
      tracking.saveLocation(this.state.index); // GUARDAR LA POSICION DEL USUARIO
    }

    if (buttonPress === 3) {
      goMenu = parseInt(buttonPress);
      this.setState({ index: goMenu });
      tracking.push(this.state.index);
      tracking.saveLocation(this.state.index);
    }

    // if (buttonPress === 12) {
    //   goMenu = parseInt(buttonPress);
    //   this.setState({ index: goMenu });
    // }
  }

  // FUNCION PARA IR AL TEMA AL PRESIONAR LOS BOTONES "IR AL TEMA"
  goToPage = (goPage) => { this.setState({ index: goPage }); }

  pagesTracking = (pageVisited) => {
    const { pagesTracking } = this.state;
    pagesTracking.push(pageVisited); // GAURDAR TODAS LAS POSICIONES
  }

  // ACTUALIZAR EL ACTUALUNIT
  updateActualUnit = (unit, position) => {
    const UNIT = parseInt(unit);
    // console.log('Unidad actual: ' + UNIT);
    // console.log(typeof(UNIT));
    if (UNIT !== this.state.unitActual) {
      this.setState({
        unitActual: UNIT,
        menuPosition: position
      })
    } else {
      // console.log('Ya se guardó la actual unidad');
    }
  }

  // ACUTALIZAR NEXTUNIT
  updateNextUnit = (nextUnit, nextPosition) => {
    if (nextUnit !== this.state.nextUnit) {
      this.setState({
        unitActual: nextUnit,
        nextUnit: nextUnit,
        menuPosition: nextPosition
      })
    } else {
      // console.log('Ya se guardó la siguiente unidad');
    }
  }

  // ACUTALIZAR STATE PARA MOSTRAR LA PAGINA AL FINAL DE LAS UNIDADES
  // showLastPage = (value) => {
  //   console.log(value);
  //   this.setState({ lastPage: value });
  // }

  // MOSTRAR LA MODAL DEL FINAL
  showEndModal = () => {
    console.log('Final');
    if (this.state.index === LIMIT) {
      this.setState({
        courseEnd : true
      })
    }

    //SCORM
    tracking.closeCourse(); // CUANDO SE COMPLETA INVOCA LA FINALAZACION EN EL SCORM
  }

  // MARCAR CADA UNIDAD COMO FINALIZADA
  checkEndUnit = (idUnit) => {
    console.log('Unidad: ' + idUnit);
    let checkArray = this.state.unitFinal;
    checkArray[idUnit] = true;
    this.setState({
      unitFinal: checkArray
    })
    console.log(this.state.unitFinal);
  }

  // HABILITAR LA SIGUIENTE UNIDAD
  checkEnabledUnit = (idUnit) => {
    console.log('Unidad: ' + idUnit);
    let enabledArray = this.state.enableUnit;
    enabledArray[idUnit] = true;
    this.setState({
      enableUnit: enabledArray
    })
    console.log(this.state.enableUnit);
  }

  // HABILITAR LA NAVEGACION LUEGO DE HACER LAS ACTIVIDADES
  checkEndActivity = (idActivity, actEnd) => {
    // console.log('Actividad: ' + idActivity + ' Finalizada: ' + actEnd);
    let nActivityArray = this.state.endActivities;
    nActivityArray[idActivity] = actEnd;
    this.setState({
      endActivities: nActivityArray
    })
    console.log(this.state.endActivities);
  }

  render() {
    // console.log('render');
    // console.log(tracking);
    const { index, menuPosition, unitActual, nextUnit, lastPage, unitFinal, enableUnit, endActivities } = this.state;

    // console.log('Actual unit: ' + this.state.unitActual);

    return (
      // CUERPO PRINCIPAL DE LA APP
      <div className='App mT-1'>
        { /* SEGUIMIENTO */ }
        { this._stateCourse() }

        {/* CARGA DEL COMPONENTE CONTENT */}
        <Content
          actualIndex = { index }
          clickNavigation = { this.navigationCourse }
          data = { DataCourse }
          goToPage = { this.goToPage }
          menuPosition = { menuPosition }
          unitActual = { unitActual }
          nextUnit = { nextUnit }
          updateActualUnit = { this.updateActualUnit }
          updateNextUnit = { this.updateNextUnit }
          imageFooter = { LOGOCOURSE }
          labelFooter = { LABELFOOTER }
          bgFooter = { BGFOOTER }
          limitNavigation = { LIMIT }
          showLastPage = { this.showLastPage }
          showEndModal = { this.showEndModal }
          lastPage = { lastPage }
          unitFinal = {unitFinal}
          enableUnit = { enableUnit }
          checkEndUnit = { this.checkEndUnit }
          checkEnabledUnit = { this.checkEnabledUnit }
          endActivities = { endActivities }
          checkEndActivity = { this.checkEndActivity }
          setScore = { this.setScore } />
      </div>
    );
  }
}

export default App;
