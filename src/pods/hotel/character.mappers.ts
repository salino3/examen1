// import * as apiModel from './api/rickAndMorty.api-model';
// import * as viewModel from './hotel.vm';

// export const mapHotelFromApiToVm = (
//   hotel: apiModel.Hotel
// ): viewModel.Hotel => ({
//   ...hotel,
//   id: hotel.id,
//   name: hotel.name,
//   description: hotel.shortDescription,
//   rating: hotel.hotelRating,
//   address: hotel.address1,
//   city: hotel.city,
// });

// export const mapHotelFromVmToApi = (hotel: viewModel.Hotel): apiModel.Hotel =>
//   (({
//     ...hotel,
//     id: hotel.id,
//     name: hotel.name,
//     shortDescription: hotel.description,
//     hotelRating: hotel.rating,
//     address1: hotel.address,
//     city: hotel.city,
//   } as unknown) as apiModel.Hotel);



import { Character } from './api/rickAndMorty.api-model';

export const mapCharacterFromApiToVm = (character: Character): Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
});

export const mapCharacterFromVmToApi = (character: Character): Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
});
