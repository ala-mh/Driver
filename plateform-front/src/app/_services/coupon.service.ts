import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {CouponModel} from "../_models/coupon.model";

const API_URL = environment.apiUrl + 'coupon/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CouponModel[]> {
    return this.http.get<CouponModel[]>(API_URL + 'coupons', {responseType: 'json'});
  }

  getAllCouponsByRestaurant(restaurantId: any): Observable<CouponModel[]> {
    return this.http.get<CouponModel[]>(API_URL + 'couponsByRestaurant/' + restaurantId, {responseType: 'json'});
  }

  create(model: CouponModel, restaurantId: number | null): Observable<any> {
    return this.http.post(
      API_URL + 'coupon/' + restaurantId,
      model,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'coupon/' + id, {responseType: 'json'});
  }

}
