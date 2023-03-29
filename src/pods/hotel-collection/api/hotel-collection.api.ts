

import { Character } from './rickAndMorty.api-model';
import { mockCharacterCollection } from './hotel-collection.mock-data';

let dataInfo = function characters() {
  return fetch('http://localhost:3000/results') // Cambiar la URL por la del servidor JSON
    .then((response) => response.json())
    .then((res) => {
      return res;
    });
};

let charactersCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<Character[]> => {
  const data = await dataInfo(); // Esperamos la resolución de la promesa
  return data as Character[]; // Convertimos los datos a un array de Character
};

export const deleteCharacter = async (
  id: number | string
): Promise<boolean> => {
  charactersCollection = charactersCollection.filter((c) => c.id !== id);
  return true;
};
