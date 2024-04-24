import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {CountryModel} from "../_models/country.model";

const API_URL = environment.apiUrl + 'country/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(API_URL + 'countries', {responseType: 'json'});
  }
}
