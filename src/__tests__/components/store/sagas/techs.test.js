import { runSaga } from 'redux-saga';

import { getTechs } from '~/store/modules/techs/sagas';
import { getTechsSuccess } from '~/store/modules/techs/actions';

describe('Techs Saga', () => {
  it('should be able to fecth techs', async () => {
    const dispatch = jest.fn();
    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess());
  });
});
