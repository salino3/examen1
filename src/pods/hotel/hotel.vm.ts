export interface Hotel {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
}
//!
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
 name: string;
 url: string;
}

export interface Location {
  name: string;
  url: string
}



export const createEmptyHotel = (): Hotel => ({
  id: '',
  name: '',
  description: '',
  rating: 3,
  address: '',
  city: '',
});
