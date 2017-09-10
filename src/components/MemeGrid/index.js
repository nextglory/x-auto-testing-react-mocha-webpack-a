'use strict';

import React from 'react';
import { MemeGridTemplate } from './template';
import { findMemes } from '../../services/api';

export default class MemeGrid extends React.Component {

  constructor(props) {
    super(props);
    
    this.refreshMemes = this.refreshMemes.bind(this);
    this.state = {
      memes: []
    };
  }
  
  refreshMemes() {
    var self = this;
    return new Promise(
      (resolve, reject) => {
        findMemes().then(payload => {
            self.setState({memes: payload.data});
            resolve();
          })
          .catch(error => {
            reject(error);
          });  
      }
    );
  }

  add(a, b) {
    return a+b;
  }

  componentDidMount() {
    this.refreshMemes();
  }

  render() {
    return MemeGridTemplate(this);
  }
}
