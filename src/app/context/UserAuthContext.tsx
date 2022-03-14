import * as React from 'react';
import { User, onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'src/app/globalSlice';
import { selectGlobal } from 'src/app/globalSlice/selectors';

interface ContextData {
  user: User | null;
}

const UserAuthContext = React.createContext<ContextData>({
  user: null,
});

export function UserAuthContextProvider({ children }) {
  const { actions } = useGlobalSlice();
  const dispatch = useDispatch();
  const globalState = useSelector(selectGlobal);

  React.useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('Auth', currentUser);
      dispatch(actions.setUserProfile(currentUser));

      if (!currentUser) {
        dispatch(actions.setUserName(''));
        dispatch(actions.setUserWeb3Address(''));
      }
    });

    return () => {
      console.log('unsubscribe');
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        user: globalState.user,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

// export function useUserAuth() {
//   return React.useContext(UserAuthContext);
// }
