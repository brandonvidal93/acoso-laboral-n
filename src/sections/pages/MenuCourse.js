import React, { Component } from 'react';

import './MenuCourse.scss';

class MenuCourse extends Component {
  state = {
    actualUnit: this.props.unitActual,
    positionMenu: this.props.menuPosition,
    posXBike: 0,
    posYBike: 0,
    animation: ''
  }

  componentWillMount() {
    this.actPos();
  }

  actPos = () => {
    const { dataPage, iPosXBike, iPosYBike } = this.props;
    let animation = 'bikeMenuStatic-' + iPosXBike;
    setTimeout(() => {
      this.setState({
        animation: animation,
      })
    }, 0);
    this.setState({
      posXBike: dataPage.background.position[iPosXBike].posX,
      posYBike: dataPage.background.position[iPosYBike].posY
    })
  }

  // FUNCION PARA IR A LA UNIDAD
  goToUnit = e => {
    const { dataPage, goToPage, updateActualUnit } = this.props;
    let numIdButton = e.currentTarget.id.substring(8);
    // var posX, posY;
    updateActualUnit(numIdButton);
    switch (parseInt(numIdButton)) {
      case 1:
        this.setState({
          animation: 'bikeMenu-1'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[1].posX,
            posYBike: dataPage.background.position[1].posY
          });

          goToPage(dataPage.Units[0].goTo);
        }, 2000);
        break;
      case 2:
        this.setState({
          animation: 'bikeMenu-2'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[2].posX,
            posYBike: dataPage.background.position[2].posY
          });

          goToPage(dataPage.Units[1].goTo);
        }, 2000);
        break;
      case 3:
        this.setState({
          animation: 'bikeMenu-3'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[3].posX,
            posYBike: dataPage.background.position[3].posY
          });

          goToPage(dataPage.Units[2].goTo);
        }, 2000);
        break;
      default:
    }
  }

  render() {
    const { Units, enableUnit, dataPage } = this.props;
    // const { Units, unitFinal, enableUnit, dataPage } = this.props;
    return (
      <div className = 'menuContent pAbs'>
        <div className = 'itemsContent'>
          {
            Units.map(unit =>
              <div
                className = { 'buttonTheme pAbs d-Flex d-C j-C aI-C ' + (enableUnit[unit.unit - 1] === false ? 'disabledButton' : '') }
                key = { unit.unit }
                id = { 'btnBoxUnit-' + (unit.unit) }
                style={ {'left': unit.btnPosition.posX, 'top': unit.btnPosition.posY} } >
                <div className = 'mB-05'>
                  <div className = 'd-Flex j-S aI-C'>
                    <h1 className = 'color-4 mR-025' dangerouslySetInnerHTML = {{ __html: unit.unit }} />
                    <p className = 'color-4' dangerouslySetInnerHTML = {{ __html: unit.title }} />
                  </div>
                  <hr className = 'line-1'></hr>
                </div>
                <div>
                  <button
                    id = { 'btnUnit-' + (unit.unit) }
                    onClick = { this.goToUnit }
                    className = 'btnStyle' >
                    <h3 className = 'color-4 fw-7'>Iniciar</h3>
                  </button>
                </div>
              </div>
            )
          }
        </div>

        <img
          alt = 'Imagen'
          className = { 'pAbs bici floatAstroneer-1 ' + (this.state.animation) }
          src = { dataPage.background.bici }
          style={ {'left': this.state.posXBike, 'top': this.state.posYBike } } />


      </div>
    );
  }
}

export default MenuCourse;
