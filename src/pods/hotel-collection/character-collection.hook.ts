import * as React from 'react';
import { Character, getCharacterCollection } from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import axios from 'axios';

export const useCharactersCollection = () => {


  const [charactersCollection, setCharactersCollection] = React.useState<
    Character[]
  >([]);

  

  const loadHotelCollection = () => {
    getCharacterCollection().then((result) =>
      setCharactersCollection(mapToCollection(result, mapCharacterFromApiToVm))
    );
  };

  

  return {
    charactersCollection,
    loadHotelCollection
  };
};
