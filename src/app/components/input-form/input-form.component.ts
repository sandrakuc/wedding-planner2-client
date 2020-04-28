import { Component, OnInit } from '@angular/core';
import {InputFormService} from '../../services/input-form.service';
import {Province} from '../../model/province';
import {City} from '../../model/city';
import {WeddingVenue} from '../../model/wedding-venue';
import {BeautyServicesCriteria} from '../../model/beauty-services-criteria';
import {CarRentingServicesCriteria} from '../../model/car-renting-services-criteria';
import {FloristicServicesCriteria} from '../../model/floristic-services-criteria';
import {MusicBandServicesCriteria} from '../../model/music-band-services-criteria';
import {PhotographicAndFilmServicesCriteria} from '../../model/photographic-and-film-services-criteria';
import {WeddingOutfitCriteria} from '../../model/wedding-outfit-criteria';
import {WeddingHallCriteria} from '../../model/wedding-hall-criteria';
import {InputDataForm} from '../../model/input-data-form';
import {WeddingServicesSet} from '../../model/wedding-services-set';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  weddingVenueProvinces: Province[];
  weddingVenueCities: City[];
  weddingVenues: WeddingVenue[];
  brideLivingProvinces: Province[];
  brideLivingCities: City[];
  groomLivingProvinces: Province[];
  groomLivingCities: City[];
  chosenWeddingVenue: WeddingVenue;
  beautyServiceCriteria: BeautyServicesCriteria;
  carRentingServicesCriteria: CarRentingServicesCriteria;
  floristicServicesCriteria: FloristicServicesCriteria;
  musicBandCriteria: MusicBandServicesCriteria;
  photographerCriteria: PhotographicAndFilmServicesCriteria;
  weddingOutfitCriteria: WeddingOutfitCriteria;
  weddingHallCriteria: WeddingHallCriteria;
  inputDataForm: InputDataForm;
  results: WeddingServicesSet[];

  constructor(private inputFormService: InputFormService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.inputDataForm = new InputDataForm();
    this.beautyServiceCriteria = new BeautyServicesCriteria();
    this.carRentingServicesCriteria = new CarRentingServicesCriteria();
    this.floristicServicesCriteria = new FloristicServicesCriteria();
    this.musicBandCriteria = new MusicBandServicesCriteria();
    this.photographerCriteria = new PhotographicAndFilmServicesCriteria();
    this.weddingOutfitCriteria = new WeddingOutfitCriteria();
    this.weddingHallCriteria = new WeddingHallCriteria();
    this.inputFormService.getProvinces().subscribe(data => { this.weddingVenueProvinces = data; });
    this.inputFormService.getCities().subscribe(data => { this.weddingVenueCities = data; });
    this.inputFormService.getWeddingVenues().subscribe(data => { this.weddingVenues = data; });
    this.inputFormService.getProvinces().subscribe(data => { this.brideLivingProvinces = data; });
    this.inputFormService.getCities().subscribe(data => { this.brideLivingCities = data; });
    this.inputFormService.getProvinces().subscribe(data => { this.groomLivingProvinces = data; });
    this.inputFormService.getCities().subscribe(data => { this.groomLivingCities = data; });
  }
  onChangeWeddingVenueProvince(chosenProvince: string): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.inputFormService.getCities().subscribe(data => { this.weddingVenueCities = this.filterWeddingVenueCities(data, chosenProvince); });
  }
  filterWeddingVenueCities(cities: City[], province: string): City[]{
    cities = cities.filter(city => city.province.name === province);
    return cities;
  }
  onChangeWeddingVenueCity(chosenCity: string): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.inputFormService.getWeddingVenues().subscribe(data => { this.weddingVenues = this.filterWeddingVenues(data, chosenCity); });
  }
  filterWeddingVenues(weddingVenues: WeddingVenue[], city: string): WeddingVenue[]{
    weddingVenues = weddingVenues.filter(venue => venue.city === city);
    return weddingVenues;
  }
  onChangeBrideLivingProvince(chosenProvince: string): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.inputFormService.getCities().subscribe(data => { this.brideLivingCities = this.filterWeddingVenueCities(data, chosenProvince); });
  }
  onChangeGroomLivingProvince(chosenProvince: string): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.inputFormService.getCities().subscribe(data => { this.groomLivingCities = this.filterWeddingVenueCities(data, chosenProvince); });
  }
  onSave(): void{
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 30000);
    this.inputDataForm.weddingVenueName = this.chosenWeddingVenue.name;
    this.inputDataForm.weddingVenueStreet = this.chosenWeddingVenue.street;
    this.inputDataForm.weddingVenuePossessionNumber = this.chosenWeddingVenue.possessionNumber;
    this.inputDataForm.weddingVenuePostalCode = this.chosenWeddingVenue.postalCode;
    this.inputDataForm.weddingHallCriteria = this.weddingHallCriteria;
    this.inputDataForm.weddingOutfitCriteria = this.weddingOutfitCriteria;
    this.inputDataForm.beautyServicesCriteria = this.beautyServiceCriteria;
    this.inputDataForm.floristicServicesCriteria = this.floristicServicesCriteria;
    this.inputDataForm.photographicAndFilmServicesCriteria = this.photographerCriteria;
    this.inputDataForm.carRentingServicesCriteria = this.carRentingServicesCriteria;
    this.inputDataForm.musicBandCriteria = this.musicBandCriteria;
    this.inputFormService.sendForm(this.inputDataForm).subscribe(data => {
      this.results = data;
      localStorage.setItem('results', JSON.stringify(data));
      this.router.navigate(['/results']);
    });
  }
}
