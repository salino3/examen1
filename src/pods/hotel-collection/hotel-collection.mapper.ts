// import * as apiModel from './api/hotel-collection.api-model';
// import * as viewModel from './hotel-collection.vm';

// export const mapFromApiToVm = (
//   hotel: apiModel.HotelEntityApi
// ): viewModel.HotelEntityVm => ({
//   id: hotel.id,
//   picture: `${process.env.BASE_PICTURES_URL}/${hotel.thumbNailUrl}`,
//   name: hotel.name,
//   description: hotel.shortDescription,
//   rating: hotel.hotelRating,
//   address: hotel.address1,
// });

import * as apiModel from './api/rickAndMorty.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  status: character.status,
  image: character.image,
  species: character.species,
  type: character.type,
  gender: character.gender,
  bestSentence: character.bestSentences,
});
