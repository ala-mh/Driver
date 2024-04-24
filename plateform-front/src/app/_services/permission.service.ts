import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {PermissionModel} from "../_models/permission.model";

const API_URL = environment.apiUrl + 'permission/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<PermissionModel[]> {
    return this.http.get<PermissionModel[]>(API_URL + 'permissions', {responseType: 'json'});
  }

  create(model: PermissionModel): Observable<any> {
    return this.http.post(
      API_URL + 'permission',
      model,
      httpOptions
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'permission/' + id, {responseType: 'json'});
  }
}
