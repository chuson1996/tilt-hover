import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import s from './TiltHover1.css';
import { serializeStyle, deserializeStyle, returnToInitialState } from '../../motionStyleHandler';
import c from 'classnames';

export default class TiltHover1 extends Component {
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
        rotateX: 0
      },
      layer3: {
        translateX: 0,
        translateY: 0,
        rotateZ: 0
      },
      title: {
        translateX: 0,
        translateY: 120,
        opacity: 0
      },
      description: {
        translateX: 0,
        translateY: 120,
        opacity: 0
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

      this.setState({
        allStyle: serializeStyle({
          layer1: {
            rotateY: spring(horRatio * 9),
            rotateX: spring(verRatio * 5)
          },
          layer3: {
            translateX: spring(horRatio * 5),
            translateY: spring(-verRatio * 5),
            rotateZ: spring(horRatio * 6)
          },
          title: {
            translateX: spring(horRatio * 30),
            translateY: spring(-verRatio * 30),
            opacity: spring(1)
          },
          description: {
            translateX: spring(horRatio * 30),
            translateY: spring(-verRatio * 30, { stiffness: 120, damping: 24 }),
            opacity: spring(1)
          }
        })
      });
    });

    this.tilter.addEventListener('mouseout', (e) => {
      this.setState({
        allStyle: serializeStyle(returnToInitialState(this.initialState, spring, {
          'description.translateY': (val) => spring(val, { stiffness: 120, damping: 24 }),
        }))
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
        style={{ perspective: '1000px', ...style }} >
        <Motion style={this.state.allStyle}>
          {(allStyle) => (({ layer1, layer3, title, description }) =>
            <div
              className={c(s.tilter__layer1, backgroundClassName)}
              style={(({ rotateX, rotateY }) => ({
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
              }))(layer1)}>
              <div
                className={c(s.tilter__layer3, glassClassName)}
                style={(({ rotateZ, translateX: x, translateY: y }) => ({
                  transform: `translateX(${x}px) translateY(${y}px) rotateZ(${rotateZ}deg)`
                }))(layer3)}></div>
              <div className={c(s.tilter__caption, captionClassName)}>
                <h1 className={c(s.tilter__title, titleClassName)} style={(({ translateX: x, translateY: y, opacity }) => ({
                  transform: `translate(${x}px, ${y}px)`,
                  opacity
                }))(title)}>
                  {titleText}
                </h1>
                <p
                  className={c(s.tilter__description, descriptionClassName)}
                  style={(({ translateX: x, translateY: y, opacity }) => ({
                    transform: `translate(${x}px, ${y}px)`,
                    opacity
                  }))(description)}>{descriptionText}</p>
              </div>
              <svg className={c(s.tilter__line, rectangleClassName)}>
                <path d="M20.5,20.5h260v375h-260V20.5z"></path>
              </svg>
            </div>
          )(deserializeStyle(allStyle))}
        </Motion>
      </div>
    );
  }
}
