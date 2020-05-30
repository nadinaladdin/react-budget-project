import {accountsActionTypes} from "./actions";

const DEFAULT_STATE = {
    accounts: [
        {
            title: "Зарплатная карта",
            total: "45000"
        },
        {
            title: "Финансовая подушка",
            total: "17000"
        },
        {
            title: "Буфер",
            total: "20000"
        }
    ]
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case accountsActionTypes.FETCH_ACCOUNTS:
            return {
                ...state
            };
        case accountsActionTypes.CREATE_ACCOUNT:
            return {
                ...state, accounts: [action.payload, ...state.accounts]
            };
        default: return state
    }
}