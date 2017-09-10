import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import App from './';

describe('/components/App', () => {
  it('<App> component should render', () => {
    const wrapper = renderIntoDocument(<App />);
    expect(wrapper).toExist();
  });
});