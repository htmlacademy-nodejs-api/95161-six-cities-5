import {City} from './city-type.enum.js';
import {Accomodation} from './accomodation-type.enum.js';
import {Amenetie} from './amaneties-type.enum.js';
import {Coordinate} from './coordinates.type.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  photos: string [];
  isPremium: boolean;
  isFavorite: boolean;
  rank: number;
  accomodation: Accomodation;
  roomsNumber: number;
  guestsNumber: number;
  price: number;
  amenities: Amenetie [];
  author: string;
  commentsNum: number;
  coordinate: Coordinate;
}

