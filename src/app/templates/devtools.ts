// @ts-nocheck
// ignored bc window doesnt always have __REDUX_DEVTOOLS_EXTENSION__ 
// but if your using this, it should be assumed it does!

export const withDevTools = // only in development
    process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__;


export const devTools = withDevTools && window.__REDUX_DEVTOOLS_EXTENSION__.connect();
