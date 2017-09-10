'use strict';

import React from 'react';
import MemeGrid from '../MemeGrid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <div>
              <span className="layout-title">Gallary</span>
              <div className="layout-spacer"></div>
            </div>
          </header>

          <div className="demo-ribbon"></div>
          <MemeGrid />
        </div>
      </div>
    );
  }
}
