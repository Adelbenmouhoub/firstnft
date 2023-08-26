import { create } from 'zustand';

export interface useModelInterfaceProps {
  ilestouvert: boolean;
  openModel: () => void;
  CloseModel: () => void;
};


const useInfoModel = create<useModelInterfaceProps>((set) => ({
  ilestouvert: false,
  openModel: () => set({ilestouvert: true}),
  CloseModel: () => set({ilestouvert: false})
  
}))

export default useInfoModel;