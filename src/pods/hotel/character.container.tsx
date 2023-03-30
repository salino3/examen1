import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyInfo } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { Character } from './api';
import { MoreInfo } from 'scenes/MoreInfo';

export const HotelContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyInfo()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

 

const handleLoadCharacter = async () => {
  const apiCharacter = await api.getRickAndMorty(Number(id));
  setCharacter(mapCharacterFromApiToVm(apiCharacter));
  console.log(apiCharacter);
};


  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    // handleLoadCityCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiInfo = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiInfo);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    };
  };


  return (
    
    <CharacterComponent character={character} 
    // onSave={handleSave}
     />
    
  );
};
