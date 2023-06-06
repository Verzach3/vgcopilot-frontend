import { atom } from 'recoil';
import { Game } from './rawgTypes';
export const recommendationsReqBoby = atom<{results: Game[], user_input: {name: string, rating_user: number}[]}>({
  key: 'reqBoby',
  default: undefined,
})


