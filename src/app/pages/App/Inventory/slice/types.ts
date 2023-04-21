import { MetronionFilterParams } from 'src/app/service/Metronion';
import { AccessoriesFilterParams } from 'src/app/service/Accessories';

/* --- STATE --- */
export interface InventoryState {
  metronionFilter: MetronionFilterParams;
  accessoriesFilter: AccessoriesFilterParams;
}
