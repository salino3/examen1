export interface Hotel {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
}
//!
// export interface Character {
//   id: number;
//   name: string;
//   status: string;
//   species: string;
//   gender: string;
//   type: string;
//   origin: Origin;
//   location: Location;
//   image: string;
//   episode: string[];
//   url: string;
//   created: string;
//   bestSentences: string;
// }

export interface Origin {
 name: string;
 url: string;
}

export interface Location {
  name: string;
  url: string
}



 export const createEmptyInfo = (): any  => ({
  bestSentences: ""
})
