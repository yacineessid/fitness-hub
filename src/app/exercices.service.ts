import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises';
  private apiKey = environment.apiKey ||''

  constructor(private http: HttpClient) {}

  getExercises(muscle?: string,difficulty?: string, ): Observable<any[]> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);
    let url = this.apiUrl;

    if (difficulty) {
      url += `?difficulty=${difficulty}`;
    }

    if (muscle) {
      url += `&muscle=${muscle}`;
    }

    return this.http.get<any[]>(url, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching exercises:', error);
        return throwError('Error fetching exercises. Please try again later.'); // Or handle the error as per your requirement
      })
    );
  }
  private exercisesSubject = new BehaviorSubject<any[]>([]);
  exercises$ = this.exercisesSubject.asObservable();

  setExercises(exercises: any[]) {
    this.exercisesSubject.next(exercises);
  }
}

