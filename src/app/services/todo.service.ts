import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  addItem(name: string, item: string) {
    this.http.post<number>('http://localhost:8080/', {name, item}).subscribe();
  }

  removeItem(name: string, item: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        name: name,
        item: item
      },
    };

    this.http.delete('http://localhost:8080/', options).subscribe();
  }

  loadItems(name: string) {
    return this.http.get<Array<string>>('http://localhost:8080/' + name);
  }

}