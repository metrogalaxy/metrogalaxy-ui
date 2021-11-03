import { AccountState } from 'src/app/pages/App/components/Account/slice/types';
import { InventoryState } from 'src/app/pages/App/Inventory/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  account?: AccountState;
  inventory?: InventoryState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
