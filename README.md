[Demo](https://tilt-hover.now.sh)

This project is inspired by the hover effect seen on [Codrop](https://tympanus.net/codrops/2016/11/23/tilt-hover-effects/).

This module contains 6 samples of the tilt hover (Check the demo).

## Install
```
npm install --save tilt-hover
```

## Props
1. className: string  
Purpose: To modify the size of the card

2. backgroundClassName: string  
Purpose: To change the image background (using css)

3. glassClassName: string  
Purpose: To change the gradient background (using css)

4. captionClassName: string  
Purpose: To modify the container div of the title and subtitle

6. rectangleClassName: string  
Purpose: The rectangle inside the card is a svg. Use this prop to add a class that modifies the svg attributes like stroke, fill, ...

7. titleClassName: string  
Purpose: To add style to the card's title

8. desciptionClassName: string  
Purpose: To add style to the card's description

7. title: string  
The title of the card

8. description: string  
The description of the card

## Example
```javascript
// App.js
import React, { Component } from 'react';
import {TiltHover1} from 'tilt-hover';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TiltHover1
          backgroundClassName={'background'}
          glassClassName={'glass'}
          captionClassName={'caption'}
          title={'Creativity'}
          descriptionClassName={'description'}
          description={'NEVER STOP'}
          className={'tilter card1'} />
      </div>
    );
  }
}
export default App;
```

```css
/* App.css */
h1 {
  font-family: 'Abril Fatface', serif;
  font-size: 2.5em;
  letter-spacing: 2px;
}

.app {
  padding: 200px;
}


.description {
  font-size: 0.85em;
  letter-spacing: 0.15em;
  margin-top: 1em;
  font-weight: 200;
  font-family: 'Roboto','Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif;
}

.tilter {
  margin-right: 3em;
  margin-bottom: 3em;
}

.card1 .background {
  background-image: url(https://images.unsplash.com/photo-1479231233972-e184fe70398e?dpr=1&auto=format&fit=crop&w=1199&h=793&q=80&cs=tinysrgb&crop=);
  background-position: center center;
}
.card1 .glass {
  background-image: linear-gradient(45deg, rgba(32,30,29,0.78) 0%, rgba(95,94,78,0.44) 54%, rgba(250,250,250,0.32) 100%);
}
.card1 .caption {
  padding: 3em;
}
```
