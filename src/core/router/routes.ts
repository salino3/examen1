import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  createCharacters: string;
  editCharacters: string;
  moreInfo: string;
  characters: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  createCharacters: '/characters/create',
  editCharacters: '/characters/:id',
  moreInfo: '/characters/moreinfo/:id',
  characters: '/characters',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacters'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacters, { id }),
};
