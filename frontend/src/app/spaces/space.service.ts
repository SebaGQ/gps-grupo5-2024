import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private apiUrl = 'http://localhost:1313/api/commonSpaces'; // URL de la API

  constructor(private http: HttpClient) { }

  getCommonSpaces(): Observable<any[]> {
    return this.http.get<{state: string, data: any[]}>(this.apiUrl).pipe(
      map(response => response.data)  // Asegúrate de extraer 'data' del objeto de respuesta
    );
  }
  createCommonSpace(space: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, space);
  }

  updateCommonSpace(id: string, space: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, space);
  }

  deleteCommonSpace(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  }
