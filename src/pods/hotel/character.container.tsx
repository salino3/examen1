import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createEmptyInfo } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import {  Character } from './api';
import { MoreInfo } from 'scenes/MoreInfo';
import { useCharactersCollection } from 'pods/hotel-collection/character-collection.hook';

export const HotelContainer: React.FunctionComponent = (props) => {

  const { charactersCollection, loadHotelCollection } = useCharactersCollection();
const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams();

  //!


  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  React.useEffect( () => {
    const foundCharacter: any =  charactersCollection.find(
      (item) => item.id === id
    );
    
    setCharacter(foundCharacter);
  }, [charactersCollection, id]);
  



  React.useEffect(() => {
    const foundCharacter: any = charactersCollection.find((item) => item.id === Number(id));
    if (foundCharacter) {
      setCharacter( foundCharacter);
    }
  }, [charactersCollection, id]);

console.log("el character", character)

  return (
    <>
        <CharacterComponent character={character} />
    </>
  );
};



