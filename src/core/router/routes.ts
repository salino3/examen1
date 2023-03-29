import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  createHotel: string;
  editHotel: string;
  characters: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  createHotel: '/characters/create',
  editHotel: '/characters/:id',
  characters: '/characters',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
  editHotel: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
};
