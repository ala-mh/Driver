import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {ClientModel} from "../_models/client.model";

const API_URL = environment.apiUrl + 'client/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(API_URL + 'clients', {responseType: 'json'});
  }

  getAllClientsByPhone(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(API_URL + 'clientsByPhone', {responseType: 'json'});
  }

  getAllClientsByManager(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(API_URL + 'clientsByManager', {responseType: 'json'});
  }

  getAllClientsByPhoneAndRestaurant(restaurantId: any): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(API_URL + 'clientsByPhoneAndRestaurant/' + restaurantId, {responseType: 'json'});
  }

  getAllClientsByManagerAndRestaurant(restaurantId: any): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(API_URL + 'clientsByManagerAndRestaurant/' + restaurantId, {responseType: 'json'});
  }

  create(model: ClientModel, restaurantId: number | null): Observable<any> {
    return this.http.post(
      API_URL + 'client/' + restaurantId,
      model,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'client/' + id, {responseType: 'json'});
  }

  changeStatus(id: number): Observable<any> {
    return this.http.put(
      API_URL + 'status/' + id,
      httpOptions
    );
  }

}
