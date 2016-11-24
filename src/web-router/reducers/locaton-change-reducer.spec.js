import merge from '../../mock-merge'
import locationChangeReducer from './location-change-reducer'

const initialState = {
  view: {
    choose: {
      allVisibleState: {}
    },
    location: '',
    senders: [{
      state: ['', '', 'uncheck'],
      id: 'xxxx-xxx-xxx-xxxx',
      label: 'label-a'
    }, {
      state: ['', '', 'uncheck'],
      id: 'xxxx-xxx-xxx-xxxx',
      label: 'label-b'
    }],
    receivers: [{
      state: ['', '', 'uncheck'],
      id: 'xxxx-xxx-xxx-xxxx',
      label: 'label-a'
    }, {
      state: ['', '', 'uncheck'],
      id: 'xxxx-xxx-xxx-xxxx',
      label: 'label-b'
    }]
  }
}

describe('Location Change Reducer', () => {
  it('Does nothing if the pathname does not include web-router', () => {
    let newState = locationChangeReducer(initialState, {
      payload: {
        pathname: '',
        query: {}
      }
    }, merge)

    expect(newState.view.senders).toEqual(initialState.view.senders)
    expect(newState.view.receivers).toEqual(initialState.view.receivers)
  })

  it('Updates the location when pathname includes /web-router', () => {
    let newState = locationChangeReducer(initialState, {
      payload: {
        pathname: '/web-router/location',
        query: {}
      }
    }, merge)

    expect(newState.view.location).toBe('/location')
  })
})
