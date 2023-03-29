import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useHotelCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { deleteCharacter } from './api';

export const HotelCollectionContainer = () => {
  const { charactersCollection, loadHotelCollection } = useHotelCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  const handleCreateHotel = () => {
    navigate(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadHotelCollection();
  };

  return (
    <CharacterCollectionComponent
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
      characterCollections={charactersCollection }
    />
  );
};
