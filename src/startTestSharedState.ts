import { atom } from "recoil";

export const startTestSharedState = atom<string[]>({
  key: 'startTestShareState',
  default: [],
})