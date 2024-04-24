import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {ReservationModel} from "../_models/reservation.model";
import {CommissionModel} from "../_models/commission.model";

const API_URL = environment.apiUrl + 'reservation/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservations', {responseType: 'json'});
  }

  getAllReservationsByPhone(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsByPhone', {responseType: 'json'});
  }

  getAllReservationsByManager(): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsByManager', {responseType: 'json'});
  }

  getAllReservationsByPhoneAndRestaurant(restaurantId: any): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsByPhoneAndRestaurant/' + restaurantId, {responseType: 'json'});
  }

  getAllReservationsByPhoneAndRestaurantAndDate(restaurantId: any, date: String): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsByPhoneAndRestaurantAndDate/' + restaurantId + '/' + date, {responseType: 'json'});
  }

  getAllReservationsConfirmedByPhoneAndRestaurantAndDate(restaurantId: any, date: String): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsConfirmedByPhoneAndRestaurantAndDate/' + restaurantId + '/' + date, {responseType: 'json'});
  }

  getAllReservationsByManagerAndRestaurant(restaurantId: any): Observable<ReservationModel[]> {
    return this.http.get<ReservationModel[]>(API_URL + 'reservationsByManagerAndRestaurant/' + restaurantId, {responseType: 'json'});
  }

  create(model: ReservationModel, restaurantId: number | null): Observable<any> {
    return this.http.post(
      API_URL + 'reservation/' + restaurantId,
      model,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'reservations/' + id, {responseType: 'json'});
  }

  changeState(id: number): Observable<any> {
    return this.http.put(
      API_URL + 'state/' + id,
      httpOptions
    );
  }

  cancel(id: number): Observable<any> {
    return this.http.put(
      API_URL + 'cancel/' + id,
      httpOptions
    );
  }

  getAllSumCommissionsByDate(date: string | null): Observable<CommissionModel[]> {
    return this.http.get<CommissionModel[]>(API_URL + 'sumCommissionsByDate/' + date, {responseType: 'json'});
  }

  getAllSumCommissionsByRestaurant(restaurantId: number): Observable<CommissionModel[]> {
    return this.http.get<CommissionModel[]>(API_URL + 'sumCommissionsByRestaurant/' + restaurantId, {responseType: 'json'});
  }

  downloadReservations(restaurantId: any, date: String): Observable<HttpResponse<Blob>> {
    return this.http.get(API_URL + 'download/' + restaurantId + '/' + date, {
      responseType: 'blob',
      observe: 'response'
    });
  }

}
