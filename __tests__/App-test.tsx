/**
 * @format
 */
 import '@testing-library/jest-native/extend-expect';
import {Dimensions} from 'react-native';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native'

import {Home} from "@src/screens"
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
  return {
    get: () => {
      return {
        width: 414, height:896 
      }
    }
  }
})


afterEach(cleanup);

const setLayoutVertical = {
  nativeEvent: {
    layout: {
      height: 693.5
    }
  }
}

it('renders correctly', () => {
  render(<Home />)
});

// On touch on third profile, changes active to 3
it('changes active circle on profile clicked', () => {
  const {getByTestId} = render(<Home />)
  fireEvent.press(getByTestId("HScroll3.button"))
  expect(getByTestId('image-circle-3')).toHaveStyle({ borderColor: '#81D4FA' });
})

it('Horizontally Scrolling to third profile adds border radius to image circle of third profile', () => {
  const eventData = {
    nativeEvent: {
      contentOffset: {y: 0, x: 164},
      layoutMeasurement: {width: 414, height: 104.5} 
    },
  };
  const {getByTestId} = render(<Home />)
  const scrollView = getByTestId('ProfileHorizontal')
  //ProfileHorizontal
  fireEvent(scrollView, 'onScrollBeginDrag')
  fireEvent.scroll(scrollView, eventData);
  fireEvent(scrollView, 'onMomentumScrollEnd')
  expect(getByTestId('image-circle-2')).toHaveStyle({ borderColor: '#81D4FA' });
})


it('Vertical Scrolling to third profile adds border radius to image circle of third profile',  () => {
  const eventData = {
    nativeEvent: {
      contentOffset: {y: 1387, x: 0},
      layoutMeasurement: {width: 414, height: 693.5}
    },
  };
  const {getByTestId} = render(<Home />)
  const scrollView = getByTestId('ProfileVertical')
  fireEvent(scrollView, 'onLayout', setLayoutVertical)
  fireEvent(scrollView, 'onScrollBeginDrag')

  fireEvent.scroll(scrollView, eventData);
  fireEvent(scrollView, 'onMomentumScrollEnd')
  expect(getByTestId('image-circle-2')).toHaveStyle({ borderColor: '#81D4FA' });
})

// Horizontal Scrolling changes active and 