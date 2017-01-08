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
          title={'Creativity'}
          descriptionClassName={s.description}
          description={'NEVER STOP'}
          className={`${s.tilter} ${s.card1}`} />

        <TiltHover2
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'Hustle'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'ALL WEEK'}
          className={`${s.tilter} ${s.card2}`} />

        <TiltHover3
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'Dream Big'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          description={'TAKE ACTION'}
          className={`${s.tilter} ${s.card3}`}/>

        <TiltHover4
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'Hustle'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'ALL WEEK'}
          className={`${s.tilter} ${s.card4}`} />

        <TiltHover5
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'Travel More'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'BE OPEN-MINDED'}
          className={`${s.tilter} ${s.card5}`} />

        <TiltHover6
          backgroundClassName={s.background}
          glassClassName={s.glass}
          captionClassName={s.caption}
          title={'Who Am I?'}
          titleClassName={s.title}
          descriptionClassName={s.description}
          rectangleClassName={s.rectangle}
          description={'Son Chu Hoang'}
          className={`${s.tilter} ${s.card6}`} />
      </div>
    );
  }
}

export default Example;
