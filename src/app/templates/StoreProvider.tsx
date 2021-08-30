import React from 'react';
import { reducer, StoreContext, initialState, StoreProvider } from '.';

interface Props {
    children: React.ReactChild;
}
export const <%= capitalizedName %>StoreProvider = ({ children }: Props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};