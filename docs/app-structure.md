# The Slice

A slice is a portion of the application data. It's recommended to keep our `slices` closer to the component using it.
Reference: https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/slice

# Global State Definition

Global state (or root state) type is defined at `/src/types` folder. Whenever we define new slice in our app, we need to add the new state definition into the `RootState` interface. Note that new state must be marked optionally.

# Redux Injectors

Redux injectors allow us to dynamically load reducers and sagas when needed, instead of loading them all upfront.
Reference: https://cansahin.gitbook.io/react-boilerplate-cra-template/building-blocks/slice/redux-injectors
