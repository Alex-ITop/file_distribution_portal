import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { getTree } from "../../shared/api/scope";
import { ITreeState } from "./types/tree";

export const useTree = create<ITreeState>()(devtools((set) => ({
    scopes: [],
    fetchTree: async () => {
        const response = await getTree();
        set({ scopes: response }, false, 'getTree')
    },
})));
