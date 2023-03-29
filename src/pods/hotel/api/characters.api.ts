import { RickAndMorty, Character } from './rickAndMorty.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharactersCollection } from './characters.mock-data';

export const getRickAndMorty = async (id: number): Promise<Character> => {
  return mockCharactersCollection.find((c) => c.id === id);
};



export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
