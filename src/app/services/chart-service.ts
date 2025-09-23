import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Need to learn
import { Observable } from 'rxjs'; // Need to learn

@Injectable({
  providedIn: 'any'
})
export class ChartService {
  constructor(private http:HttpClient){}

  getChartData(): Observable<{totalAnimals: number; enclosures:number; feedingTasks:number; alerts:number;}> {
    return this.http.get<{totalAnimals: number; enclosures:number; feedingTasks:number; alerts:number;}>('http://localhost:3000/stats')
  };

  getFeedingSchedule(): Observable<{id:number; animal:string; time:string; status:string}> {
    return this.http.get<{id:number; animal:string; time:string; status:string}>('http://localhost:300/feedingSchedule')
  }
}

