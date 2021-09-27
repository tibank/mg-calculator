import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";

import {Observable} from "rxjs";

import {Bank} from "./bank";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  baseUrl = environment.api;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Bank[]> {
    let url = `${this.baseUrl}/banks`;
    return this.http.get<Bank[]>(url, this.httpOptions);
  }

  getById(id: number): Observable<Bank> {
    let url = `${this.baseUrl}/banks${id}`;
    return this.http.get<Bank>(url, this.httpOptions);
  }

  removeBank(id: number): Observable<Bank> {
    let url = `${this.baseUrl}/banks/${id}`;
    return this.http.delete<Bank>(url, this.httpOptions);
  }
}
