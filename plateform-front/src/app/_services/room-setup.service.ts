import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {RoomSetupModel} from "../_models/room-setup.model";

const API_URL = environment.apiUrl + 'roomSetup/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class RoomSetupService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<RoomSetupModel[]> {
    return this.http.get<RoomSetupModel[]>(API_URL + 'roomsSetup', {responseType: 'json'});
  }

  create(models: RoomSetupModel[]): Observable<any> {
    return this.http.post(
      API_URL + 'roomSetup',
      models,
      {
        responseType: 'json',
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'roomSetup/' + id, {responseType: 'json'});
  }
}
