import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterComponent } from './character.component';
import { Character } from './api';
import { useCharactersCollection } from 'pods/hotel-collection/character-collection.hook';

export const HotelContainer: React.FunctionComponent = (props) => {
  const { charactersCollection, loadHotelCollection } =
    useCharactersCollection();
  const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  React.useEffect(() => {
    const foundCharacter: any = charactersCollection.find(
      (item) => item.id === id
    );

    setCharacter(foundCharacter);
  }, [charactersCollection, id]);

  React.useEffect(() => {
    const foundCharacter: any = charactersCollection.find(
      (item) => item.id === Number(id)
    );
    if (foundCharacter) {
      setCharacter(foundCharacter);
    }
  }, [charactersCollection, id]);

  return (
    <>
      <CharacterComponent character={character} />
    </>
  );
};
