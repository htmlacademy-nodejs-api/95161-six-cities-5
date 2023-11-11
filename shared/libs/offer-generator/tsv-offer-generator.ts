import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const MIN_RANK = 1;
const MAX_RANK = 5;

const MIN_ROOMS = 1;
const MAX_ROOMS = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 100;

const MIN_COORDINATE = 1;
const MAX_COORDINATE = 60;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItems<string>(this.mockData.photos);
    const isPremium = getRandomItem([true,false]);
    const isFavorite = getRandomItem([true,false]);
    const rank = generateRandomValue(MIN_RANK, MAX_RANK).toString();
    const accomodation = getRandomItem(this.mockData.accomodations);
    const roomsNumber = generateRandomValue(MIN_ROOMS,MAX_ROOMS);
    const guestsNumber = generateRandomValue(MIN_GUESTS,MAX_GUESTS);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const amenities = getRandomItems<string>(this.mockData.amenities);
    const author = getRandomItem<string>(this.mockData.authors);
    const commentsNum = generateRandomValue(MIN_COMMENTS, MAX_COMMENTS);
    const coordinate = `latitude: ${generateRandomValue(MIN_COORDINATE, MAX_COORDINATE,6)}, longitude: ${generateRandomValue(MIN_COORDINATE, MAX_COORDINATE,6)}`;

    return [
      title, description, postDate,city,preview,
      photos, isPremium, isFavorite, rank, accomodation,
      roomsNumber, guestsNumber, price, amenities, author,
      commentsNum, coordinate
    ].join('\t');
  }
}
