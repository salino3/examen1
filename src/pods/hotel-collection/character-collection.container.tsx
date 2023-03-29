import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharactersCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { deleteCharacter } from './api';

export const HotelCollectionContainer = () => {
  const { charactersCollection, loadHotelCollection } = useCharactersCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  const handleCreateHotel = () => {
    navigate(linkRoutes.createCharacters);
  };

  const handleEdit = (id: string ) => {
    navigate(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string | number) => {
    await deleteCharacter(id);
    loadHotelCollection();
  };

  return (
      <CharacterCollectionComponent
        onCreateCharacter={handleCreateHotel}
        onEdit={handleEdit}
        onDelete={handleDelete}
        characterCollections={charactersCollection}
      />
  );
};