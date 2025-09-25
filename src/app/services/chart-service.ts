import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Need to learn
import { Observable } from 'rxjs'; // Need to learn
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'any'
})
export class ChartService {
  constructor(private http:HttpClient){}

  animal: Animal | undefined

  getAnimalData(): Observable<Animal> {
    return this.http.get<Animal>('http://localhost:3000/animals')
  }

  getFeedingSchedule(): Observable<{id:number; animal:string; time:string; status:string}> {
    return this.http.get<{id:number; animal:string; time:string; status:string}>('http://localhost:300/feedingSchedule')
  }
}

