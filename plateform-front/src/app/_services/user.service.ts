import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {StorageService} from "./storage.service";
import {UserModel} from "../_models/user.model";
import {environment} from "../../config/env";
import {Page} from "../_models/page.model";

const API_URL = environment.apiUrl + 'board/user/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, public storageService: StorageService) {
  }

  /*getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(API_URL + 'users', {responseType: 'json'});
  }*/

  getAll(page: number, size: number, filters: any): Observable<Page<UserModel>> {
    let encodedFilters: string | undefined;
    encodedFilters === "{}" ? encodedFilters = undefined : JSON.stringify(filters);
    return this.http.get<Page<UserModel>>(`${API_URL}users?page=${page}&size=${size}&filters=${encodedFilters}`, {responseType: 'json'});
  }

  getUserById(userId: number): Observable<UserModel> {
    return this.http.get<UserModel>(API_URL + 'user/' + userId, {responseType: 'json'});
  }

  create(model: UserModel, roleId: number, restaurantId?: number | null): Observable<any> {
    restaurantId

    return this.http.post(
      API_URL + 'user/' + roleId + '/' + restaurantId,
      model,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'user/' + id, {responseType: 'json'});
  }

  changePersonal(changePersonalRequest: any): Observable<any> {
    return this.http.put(
      API_URL + 'changePersonal',
      changePersonalRequest,
      httpOptions
    );
  }

  changePassword(changePasswordRequest: any): Observable<any> {
    return this.http.put(
      API_URL + 'changePassword',
      changePasswordRequest,
      httpOptions
    );
  }

  resetPassword(resetPasswordRequest: any): Observable<any> {
    return this.http.put(
      API_URL + 'resetPassword',
      resetPasswordRequest,
      httpOptions
    );
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    const req = new HttpRequest('PUT', API_URL + 'uploadImage', formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  changeStatus(id: number): Observable<any> {
    return this.http.put(
      API_URL + 'status/' + id,
      httpOptions
    );
  }

}
