import moxios from 'moxios';
import { fetchAccounts } from "../../../src/reducers/accounts/actions";
import {storeFactory} from "../../testUtils";

describe('fetch accounts action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
       moxios.uninstall();
    });
    test('add response to the state',  () => {
        const accounts = [
            {
                name: 'account 1',
                sum: 1000
            },
            {
                name: 'account 2',
                sum: 0
            }
        ];

        const store = storeFactory({});

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: accounts,
            });
        });

        // await store.dispatch(fetchAccounts());
        // const newState = store.getState();
        // expect(newState.accounts).toBe(accounts);
        return store.dispatch(fetchAccounts())
            .then(() => {
               const newState = store.getState();
               expect(newState.accounts).toBe(accounts);
            });
    });
});
