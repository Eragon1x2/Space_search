import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
  getMoreData(link:string) {
    return this.http.get(link)
  }
  
  getByTitle(text:string) {
    return this.http.get(this.apiUrl + `?title_contains=${text}`)
  }
  getById(id: string) {
    return this.http.get(this.apiUrl + `${id}/`)
  }
}