import React, { Component } from 'react';
import {
  TiltHover1,
  TiltHover2,
  TiltHover3,
  TiltHover4,
  TiltHover5,
  TiltHover6
} from '../lib/tilt-hover';
import s from './Example.css';

class Example extends Component {
  render() {
    return (
      <div className={s.app}>
        <TiltHover1
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover1'}
          descriptionClassName={s.description}
          description={'Some text'}
          className={`${s.tilter} ${s.card1}`} />

        <TiltHover2
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover2'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'Some text'}
          className={`${s.tilter} ${s.card2}`} />

        <TiltHover3
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover3'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          description={'Some text'}
          className={`${s.tilter} ${s.card3}`}/>

        <TiltHover4
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover4'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'Some text'}
          className={`${s.tilter} ${s.card4}`} />

        <TiltHover5
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover5'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'Some text'}
          className={`${s.tilter} ${s.card5}`} />

        <TiltHover6
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'TiltHover6'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'Some text'}
          className={`${s.tilter} ${s.card6}`} />
      </div>
    );
  }
}

export default Example;
