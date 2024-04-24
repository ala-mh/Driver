import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {StateModel} from "../_models/state.model";

const API_URL = environment.apiUrl + 'state/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<StateModel[]> {
    return this.http.get<StateModel[]>(API_URL + 'states', {responseType: 'json'});
  }
}
