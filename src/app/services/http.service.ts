import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

private url= 'https://randomuser.me/api/'

getPerson(): Observable<any>{
    return this.httpClient.get(this.url + '?results=1')
}

}