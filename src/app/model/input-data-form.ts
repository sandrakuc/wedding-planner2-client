import {WeddingHallCriteria} from './wedding-hall-criteria';
import {WeddingOutfitCriteria} from './wedding-outfit-criteria';
import {BeautyServicesCriteria} from './beauty-services-criteria';
import {MusicBandServicesCriteria} from './music-band-services-criteria';
import {FloristicServicesCriteria} from './floristic-services-criteria';
import {PhotographicAndFilmServicesCriteria} from './photographic-and-film-services-criteria';
import {CarRentingServicesCriteria} from './car-renting-services-criteria';

export class InputDataForm {
  guestQuantity: number;
  budget: number;
  budgetMargin: number;
  weddingVenueName: string;
  weddingVenueStreet: string;
  weddingVenuePossessionNumber: string;
  weddingVenuePostalCode: string;
  weddingVenueCity: string;
  weddingVenueProvince: string;
  brideLivingCity: string;
  brideLivingProvince: string;
  groomLivingCity: string;
  groomLivingProvince: string;
  needCarRenting: boolean;
  weddingHallCriteria: WeddingHallCriteria;
  weddingOutfitCriteria: WeddingOutfitCriteria;
  beautyServicesCriteria: BeautyServicesCriteria;
  musicBandCriteria: MusicBandServicesCriteria;
  floristicServicesCriteria: FloristicServicesCriteria;
  photographicAndFilmServicesCriteria: PhotographicAndFilmServicesCriteria;
  carRentingServicesCriteria: CarRentingServicesCriteria;
}
