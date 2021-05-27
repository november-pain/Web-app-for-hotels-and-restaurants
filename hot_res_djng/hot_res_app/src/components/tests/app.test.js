import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import app from '../app';
import {lol,
    lol1,
    lol2,
    lol3,
    lol4,
    lol5,
    lol6,
    lol7,
    lol8,
    lol9,
    lol10
} from '../../styles/animations'





// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Empty test runs', () => {
  expect(true).toBeTruthy();
  expect(lol()).toBeTruthy();
  expect(lol1()).toBeTruthy();
  expect(lol2()).toBeTruthy();
  expect(lol3()).toBeTruthy();
  expect(lol4()).toBeTruthy();
  expect(lol5()).toBeTruthy();
  expect(lol6()).toBeTruthy();
  expect(lol7()).toBeTruthy();
  expect(lol8()).toBeTruthy();
  expect(lol9()).toBeTruthy();
  expect(lol10()).toBeTruthy();
});



