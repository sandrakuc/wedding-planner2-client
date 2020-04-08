import {BeautyService} from './beauty-service';
import {CarRentingService} from './car-renting-service';
import {FloristicService} from './floristic-service';
import {HairDresserService} from './hair-dresser-service';
import {MakeUpSalon} from './make-up-salon';
import {MusicBand} from './music-band';
import {Photographer} from './photographer';
import {WeddingDressStore} from './wedding-dress-store';
import {WeddingSuiteStore} from './wedding-suite-store';
import {WeddingHallStore} from './wedding-hall-store';

export class WeddingServicesSet {
  beautySalon: BeautyService;
  carRenting: CarRentingService;
  floristicService: FloristicService;
  hairDresser: HairDresserService;
  makeUpSalon: MakeUpSalon;
  musicBand: MusicBand;
  photographer: Photographer;
  dressStore: WeddingDressStore;
  suiteStore: WeddingSuiteStore;
  hall: WeddingHallStore;
  totalPoints: number;
  totalAmount: number;
}
