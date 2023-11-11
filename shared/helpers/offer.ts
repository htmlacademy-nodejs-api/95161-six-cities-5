import {Accomodation, Amenetie, City, Coordinate, Offer} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [title, description, postDate, city, preview, photos, isPremium, isFavorite, rank, accomodation,
    roomsNumber, guestsNumber, price, amenities, author, commentsNum, coordinate] = offerData.replace('\n', '').split('\t');

  const getCoordinate = (coordinateStr: string): Coordinate => {
    const coordinatesPairs = coordinateStr.split(','); // [long:1, attt:2]
    return {latitude: coordinatesPairs[0].split(':')[1],longitude: coordinatesPairs[1].split(':')[1]};
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    preview,
    photos: photos.split(','),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rank: +rank,
    accomodation: accomodation as Accomodation,
    roomsNumber: +roomsNumber,
    guestsNumber: +guestsNumber,
    price: +price,
    amenities: amenities.split(',') as Amenetie[],
    author,
    commentsNum: +commentsNum,
    coordinate: getCoordinate(coordinate),
  };
}
