import {  Character } from './rickAndMorty.api-model';
import {  mockCharactersCollection } from './characters.mock-data';

export const getRickAndMorty = async (id: number): Promise<Character> => {
  return mockCharactersCollection.find((c) => c.id === id);
};





export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
