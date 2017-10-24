import React from 'react';
import { mount, shallow } from 'enzyme';
import ProspectEditContainer from '../../../../src/containers/prospectContainer/ProspectEditContainer';
import ReactDOM from 'react-dom';

import { ProspectMiddleWare, errorHandler } from '../../../../src/api/prospect/prospectApi';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import * as ActionTypes from '../../../../src/constants/actionTypes';
import { actionCreators as prospectAction } from '../../../../src/store/prospect';
//import configureStore from 'redux-mock-store';
import { reducers, ApplicationState } from '../../../../src/store';



import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../../../src/configureStore';
import * as RoutesModule from '../../../../src/routes';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
let routes = RoutesModule.routes;
describe('Prospect Container',()=>{
    
    // beforeEach(() => 
    // {
    //     const middlewares = [ProspectMiddleWare]; // add your middlewares like `redux-thunk` 
    //     const mockStore = configureStore(middlewares);    
    // });
    // test.only('Store Validation',(done)=>{
    //     const getState = {}; // initial state of the store 
    //     const action = { type: ActionTypes.GET_STATES_SUCCESS };
    //     const expectedActions = [action];
       
    //     const store = mockStore(getState, expectedActions, done);
    //     store.dispatch(action);

    // });
    test('render without crashing',()=>{
        const div = document.createElement('div');
        // Create browser history to use in the Redux store
        const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
        const history = createBrowserHistory({ basename: baseUrl });

        // Get the application-wide store instance, prepopulating with state from the server where available.
        const initialState = (window as any).initialReduxState as ApplicationState;
        //const initialState = { ProspectDetail: { gender: 0 }, states: [], errors: [{ fieldName: '', errorMessage: '' }], agentCode: '03499' } as ApplicationState;
        const store = configureStore(history, initialState);
        expect(store.getState().states.length).toEqual(0);
          window.__agentCode__ = '03499';
          window.__PROSPECTID__ = '1963';
         const container = mount(<AppContainer>
              <Provider store={ store } >
              <ConnectedRouter history={ history } children= { routes } />

              </Provider>
              </AppContainer>);
        expect(console.error).toBeCalled();        
        expect(console.error.mock.calls.length).toBeGreaterThan(0);       
        const form = container.find('form').at(0);
        const children = form.render().children().children();
        form.simulate('submit', { target: { children } });
        console.log(container.instance().context.children)
  
    })
})