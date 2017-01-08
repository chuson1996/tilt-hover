import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import c from 'classnames';
import s from './TiltHover2.css';
import { serializeStyle, deserializeStyle, returnToInitialState } from '../../motionStyleHandler';

class TiltHover2 extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    backgroundClassName: PropTypes.string,
    glassClassName: PropTypes.string,
    captionClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    descriptionClassName: PropTypes.string,
    rectangleClassName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.initialState = {
      layer1: {
        rotateY: 0,
        translateY: 0,
        translateZ: 0
      },
      line: {
        rotateZ: 0,
        translateY: 0
      },
      layer3: {
        translateX: 0,
        translateY: 0,
        rotateZ: 0
      }
    };

    this.state = {
      allStyle: serializeStyle(this.initialState)
    };
  }

  componentDidMount() {
    this.tilter.addEventListener('mousemove', (e) => {
      const axisYLeft = this.tilter.getBoundingClientRect().left + this.tilter.offsetWidth / 2;
      const axisXTop = this.tilter.getBoundingClientRect().top + this.tilter.offsetHeight / 2;

      const horRatio = Math.floor(((e.pageX - window.scrollX) - axisYLeft) / (this.tilter.offsetWidth / 2) * 100) / 100;
      const verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (this.tilter.offsetHeight / 2) * 100) / 100;

      // Layer1
      const layer1 = {
        rotateY: spring(-horRatio * 9),
        translateY: spring(-verRatio * 10),
        translateZ: spring(-verRatio * 30)
      };

      // line
      const line = {
        rotateZ: spring(-horRatio * 2),
        translateY: spring(-verRatio * 10)
      };

      // Layer3
      const layer3 = {
        translateX: spring(horRatio * 10),
        translateY: spring(verRatio * 10),
        rotateZ: spring(horRatio * 2)
      };

      this.setState({
        allStyle: serializeStyle({
          layer1, line, layer3
        })
      });
    });

    this.tilter.addEventListener('mouseout', (e) => {
      this.setState({
        allStyle: serializeStyle(returnToInitialState(this.initialState, spring))
      });
    });
  }

  render() {
    const {
      className,
      backgroundClassName,
      glassClassName,
      captionClassName,
      titleClassName,
      descriptionClassName,
      rectangleClassName,
      title: titleText,
      description: descriptionText,
      style,
      ...others
    } = this.props;
    return (
      <div
        {...others}
        className={c(s.tilter, className)}
        ref={(elem) => this.tilter = elem}
        style={{ perspective: '1000px', ...style }}>
        <Motion style={this.state.allStyle}>
          {(allStyle) => (({ layer1, line, layer3 }) =>
          <div
            className={c(s.tilter__layer1, backgroundClassName)}
            style={(({ translateZ: z, rotateY, translateY: y}) => ({
              transform: `translateZ(${z}px) rotateY(${rotateY}deg) translateY(${y}px)`
            }))(layer1)}>
            <div
              className={c(s.tilter__layer3, glassClassName)}
              style={(({ translateX: x, translateY: y, rotateZ }) => ({
                transform: `translate(${x}px, ${y}px) rotateZ(${rotateZ}deg)`
              }))(layer3)}>
            </div>
            <div className={c(s.tilter__caption, captionClassName)}>
              <h1 className={c(s.tilter__title, titleClassName)}>{titleText}</h1>
              <p className={c(s.tilter__description, descriptionClassName)}>{descriptionText}</p>
            </div>
            <svg
              style={(({ rotateZ, translateY: y }) => ({
                transform: `translateY(${y}px) rotateZ(${rotateZ}deg)`
              }))(line)}
              className={c(s.tilter__line, rectangleClassName)}>
              <path d="M20.5,20.5h260v375h-260V20.5z"></path>
            </svg>
          </div>
          )(deserializeStyle(allStyle))}
        </Motion>
      </div>
    );
  }
}

export default TiltHover2;
