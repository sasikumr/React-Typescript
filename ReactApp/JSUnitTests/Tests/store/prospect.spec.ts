import * as ActionTypes from '../../../src/constants/actionTypes';
import * as prospectAction from '../../../src/store/prospect';
import * as stateAction from '../../../src/store/states';
import * as loader from '../../../src/store/loader';
describe('actions', () => {
    it('fetch prospect', () => {
        const id = '1963';
        const expectedAction = {
            type: ActionTypes.GET_PROSPECT_REQUEST,
            id
        }
        expect(prospectAction.actionCreators.fetchProspectRequest(id)).toEqual(expectedAction)
    })
    it('fetch states', async () => {
        const expectedAction = {
            type: ActionTypes.GET_STATES_REQUEST
        }
        expect.assertions(1);
        await expect(stateAction.actionCreators.fetchStateRequest()).toEqual(expectedAction)
    })
});


describe('Reducers/Propsect/Loader', () => {
    test('Verify Loader Reducers', () => {
        expect(loader.reducer(undefined, {})).toEqual(false)
    });
    test('Verify Loader Reducers on begin', () => {
        expect(loader.reducer(false, { type: ActionTypes.LOADER_BEGIN })).toEqual(true)
    });
    test('Verify Loader Reducers on complete', () => {
        expect(loader.reducer(false, { type: ActionTypes.LOADER_COMPLETE })).toEqual(false)
    });
});

describe('Reducers/Propsect/State', () => {
    test('Verify GetState Reducers', () => {
        expect(stateAction.reducer(undefined, {})).toEqual([])
    });
    it('Verify GetState Reducers with value', () => {
        let state = [];
        state.push({ "Code": 'AL' });
        state.push({ "Code": 'AW' });
        expect(stateAction.reducer(undefined, {
            type: ActionTypes.GET_STATES_SUCCESS, states: Object.assign({}, state)
        })).toEqual(state)
    });
});

  // beforeAll(() => {
  //   //return GetStates();
  // });

  // afterAll(() => {
  //   //return ClearStore();
  // });

/*


  import configureMockStore from 'redux-mock-store'
  import thunk from 'redux-thunk'
  import * as ProspectAction from '../prospectAction';
  import * as types from '../../constants/ActionTypes'
  import nock from 'nock'
  import expect from 'expect' // You can use any testing library


  
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  
  describe('async actions', () => {
    afterEach(() => {
      nock.cleanAll()
    })
  
    xit('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
      nock('http://example.com/')
        .get('/todos')
        .reply(200, { body: { todos: ['do something'] } })
  
      const expectedActions = [
        { type: types.FETCH_TODOS_REQUEST },
        { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
      ]
      const store = mockStore({ todos: [] })
  
      return store.dispatch(actions.fetchTodos()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })*/