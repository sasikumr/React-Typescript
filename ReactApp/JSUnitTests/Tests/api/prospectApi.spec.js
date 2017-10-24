import { ProspectMiddleWare, errorHandler } from '../../../src/api/prospect/prospectApi';
import thunkMiddleware from 'redux-thunk';
import { actionCreators as prospectAction } from '../../../src/store/prospect';
import * as ActionTypes from '../../../src/constants/actionTypes';
const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn(),
    };
    const next = jest.fn();
    const invoke = (action) => ProspectMiddleWare(store)(next)(action)
    return {store, next, invoke}
  };

  it.only('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = {type:ActionTypes.GET_STATES_REQUEST}
    const loaderAction ={type:ActionTypes.LOADER_BEGIN}
    //const expectAction = {type:ActionTypes.GET_STATES_SUCCESS}

    invoke(action);
    
    expect(next).toHaveBeenCalledWith(loaderAction);
   
  })
  
  