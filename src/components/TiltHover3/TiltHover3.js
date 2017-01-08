import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import c from 'classnames';
import s from './TiltHover3.css';
import { serializeStyle, deserializeStyle, returnToInitialState } from '../../motionStyleHandler';

class TiltHover3 extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    backgroundClassName: PropTypes.string,
    glassClassName: PropTypes.string,
    captionClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    descriptionClassName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.initialState = {
      layer1: {
        rotateX: 0,
        rotateY: 0,
      },
      layer3: {
        translateX: 0,
        translateY: 0,
        translateZ: 0
      },
      shine: {
        translateX: 0,
        translateY: 0
      },
      caption: {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0
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

      const layer1 = {
        rotateX: spring(verRatio * 5),
        rotateY: spring(horRatio * 10),
      };

      const layer3 = {
        translateX: spring(horRatio * 10),
        translateY: spring(-verRatio * 10),
        translateZ: spring((verRatio - Math.abs(verRatio)) * 10)
      };

      const shine = {
        translateX: spring(horRatio * 100),
        translateY: spring(-verRatio * 100),
      };

      const caption = {
        translateX: spring(horRatio * 30),
        translateY: spring(-verRatio * 30),
        translateZ: spring((verRatio - Math.abs(verRatio)) * 20),
        rotateX: spring((verRatio - Math.abs(verRatio)) * 15 / 2)
      };

      this.setState({
        allStyle: serializeStyle({
          layer1,
          layer3,
          shine,
          caption
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
          {(allStyle) => (({ layer1, shine, layer3, caption }) =>
              <div className={c(s.tilter__layer1, backgroundClassName)} style={(({ rotateY, rotateX }) => ({
                transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
              }))(layer1)}>
              <div className={s.tilter__shine_contain}>
                <div
                  className={s.tilter__shine}
                  style={{
                    transform: `translate(${shine.translateX}px, ${shine.translateY}px)`
                  }}></div>
              </div>
              <div
                className={c(s.tilter__layer3, glassClassName)}
                style={(({ translateX: x, translateY: y, translateZ: z }) => ({
                  transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
                }))(layer3)}>
              </div>
              <div
                className={c(s.tilter__caption, captionClassName)}
                style={(({ translateX: x, translateY: y, translateZ: z, rotateX }) => ({
                  transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateX(${rotateX}deg)`
                }))(caption)}>
                <h1 className={c(s.tilter__title, titleClassName)}>{titleText}</h1>
                <p className={c(s.tilter__description, descriptionClassName)}>{descriptionText}</p>
              </div>
            </div>
          )(deserializeStyle(allStyle))}
        </Motion>
      </div>
    );
  }
}

export default TiltHover3;
