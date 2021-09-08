import {
    SET_COUNT
} from './actions';

export const reducer = (state: Record<string, any>, action: any) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
