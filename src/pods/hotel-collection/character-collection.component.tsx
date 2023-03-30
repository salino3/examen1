import * as React from 'react';
import Button from '@mui/material/Button';
import { HotelEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
 
import { Character } from './api';
import { useCharactersCollection } from './character-collection.hook';

interface Props {
  characterCollections: Character[];
  onCreateCharacter: () => void;
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
}



export const CharacterCollectionComponent: React.FunctionComponent<Props> = ( props) => {


  const { characterCollections, onCreateCharacter, onEdit, onDelete } = props;


  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add hotel
      </Button>

      <ul className={classes.list}>
        {characterCollections &&
          characterCollections.map((character) => (
            <li key={character.id}>
              <CharacterCard
                character={character}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
