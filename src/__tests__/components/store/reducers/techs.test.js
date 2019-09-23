import reducer, { INITITAL_STATE } from '~/store/modules/techs/reducer';

import * as TechsActions from '~/store/modules/techs/actions';

describe('Techs Reducer', () => {
  it('ADD_TECH', () => {
    const state = reducer(INITITAL_STATE, TechsActions.addTech('Node.js'));

    expect(state).toStrictEqual(['Node.js']);
  });
});
