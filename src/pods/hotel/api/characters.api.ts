 import {  Character } from './rickAndMorty.api-model';
// import {  mockCharactersCollection } from './characters.mock-data';
import { useCharactersCollection } from 'pods/hotel-collection/character-collection.hook';

//  export interface Chara {
//   id: number | string;
//   name: string;
//   status: string;
//   species: string;
//   type: string;
//   gender: string;
//   origin: {
//     name: string;
//     url: string;
//   };
//   location: {
//     name: string;
//     url: string;
//   };
//   image: string;
//   episode: string[];
//   url: string;
//   created: string;
//   bestSentence?: string;
// }

//? export const getRickAndMorty = async (id: string | number): Promise<any> => {

  
  
//   return mockCharactersCollection.find((c) => c.id === id);
// };



// const { charactersCollection, loadHotelCollection } =
//   useCharactersCollection();


export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
