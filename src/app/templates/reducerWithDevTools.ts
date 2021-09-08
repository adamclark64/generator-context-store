import {
    SET_COUNT
} from './actions';
import { withDevTools, devTools } from './devtools';

export const reducer = (state: Record<string, any>, action: any) => {
    if (withDevTools) devTools.send(action.type, state);
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
