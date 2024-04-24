import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";
import {PlanningModel} from "../_models/planning.model";

const API_URL = environment.apiUrl + 'planning/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<PlanningModel[]> {
    return this.http.get<PlanningModel[]>(API_URL + 'plannings', {responseType: 'json'});
  }

  create(model: PlanningModel): Observable<any> {
    return this.http.post(
      API_URL + 'planning',
      model,
      httpOptions
    );
  }

  update(model: PlanningModel): Observable<any> {
    return this.http.put(
      API_URL + 'planning',
      model,
      httpOptions
    );
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'planning/' + id, {responseType: 'json'});
  }
}
