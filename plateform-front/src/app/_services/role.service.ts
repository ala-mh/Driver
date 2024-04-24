import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleModel} from "../_models/role.model";
import {environment} from "../../config/env";

const API_URL = environment.apiUrl + 'role/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(API_URL + 'roles', {responseType: 'json'});
  }
  
}
