import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Province} from '../model/province';
import {City} from '../model/city';
import {WeddingVenue} from '../model/wedding-venue';
import {InputDataForm} from '../model/input-data-form';
import {WeddingServicesSet} from '../model/wedding-services-set';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {

  constructor(private http: HttpClient) { }

  public getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>('http://localhost:8080/provinces');
  }
  public getCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8080/cities');
  }
  public getWeddingVenues(): Observable<WeddingVenue[]> {
    return this.http.get<WeddingVenue[]>('http://localhost:8080/wedding-venues');
  }
  public sendForm(inputDataForm: InputDataForm): Observable<WeddingServicesSet[]> {
    return this.http.post<WeddingServicesSet[]>('http://localhost:8080/get-results', inputDataForm);
  }
}
