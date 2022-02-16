# Redux Thunk example

This example shows how to integrate Redux and Redux Thunk in Next.js.

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use redux that also works with Next.js's universal rendering approach.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-redux-thunk)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk&project-name=with-redux-thunk&repository-name=with-redux-thunk)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-redux-thunk with-redux-thunk-app
# or
yarn create next-app --example with-redux-thunk with-redux-thunk-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

The Redux `Provider` is implemented in `pages/_app.js`. The `MyApp` component is wrapped in a `withReduxStore` function, the redux `store` will be initialized in the function and then passed down to `MyApp` as `this.props.initialReduxState`, which will then be utilized by the `Provider` component.

Every initial server-side request will utilize a new `store`. However, every `Router` or `Link` action will persist the same `store` as a user navigates through the `pages`. 

This example includes two different ways to access the `store` or to `dispatch` actions:

1.) `pages/index.js` will utilize `connect` from `react-redux` to `dispatch` the `startClock` redux action once the component has been mounted in the browser.

2.) `components/*` have access to the redux store using `useSelector` and can dispatch actions using `useDispatch` from `react-redux@^7.1.0`

You can either use the `connect` function to access redux state and/or dispatch actions or use the hook variations: `useSelector` and `useDispatch`. It's up to you.

This example also includes hot-reloading when one of the `reducers` has changed. However, there is one caveat with this implementation: If you're using the `Redux DevTools` browser extension, then all previously recorded actions will be recreated when a reducer has changed (in other words, if you increment the counter by 1 using the `+1` button, and then change the increment action to add 10 in the reducer, Redux DevTools will playback all actions and adjust the counter state by 10 to reflect the reducer change). Therefore, to avoid this issue, the store has been set up to reset back initial state upon a reducer change. If you wish to persist redux state regardless (or you don't have the extension installed), then in `store.js` change (line 19) `store.replaceReducer(createNextReducer(initialState))` to `store.replaceReducer(createNextReducer)`.
