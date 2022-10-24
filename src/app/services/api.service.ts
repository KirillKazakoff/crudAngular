/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'http://localhost:3000/base';
@Injectable({
    providedIn: 'root',
})

export class ApiService {
    constructor(private http: HttpClient) {}
}
