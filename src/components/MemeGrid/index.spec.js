import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import MemeGrid from './';

var fetchMock = require('fetch-mock');
fetchMock.mock('http://localhost:3000/memes', 'GET', {
    data: ['http://img.hb.aicdn.com/0601d515e9c0bde875cf65ac42ede247f2e805a54befd-HyGMTK_fw658']
});

describe('/components/MemeGrid comp and api testing', () => {
  it('should render with memes', (done) => {
    const item = renderIntoDocument(
      <MemeGrid />
    );

    expect(item).toExist();
    item.refreshMemes().then(function() {
        expect(item.state.memes.length > 0).toBe(true, 'Memes should have been rendered');
        expect(fetchMock.called('http://localhost:3000/memes')).toBe(true);
        done();
      })
      .catch(function(err) {done(err)});
  });
});