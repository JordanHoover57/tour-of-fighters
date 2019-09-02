import { Injectable } from '@angular/core';
import { Fighter } from './fighter';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FighterService {

  private fightersUrl = 'api/fighters';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private messageService : MessageService,
    private http : HttpClient
    ) { }

getFighters(): Observable<Fighter[]> {
  return this.http.get<Fighter[]>(this.fightersUrl)
  .pipe(
    tap(_ => this.log('fetched fighters')),
    catchError(this.handleError<Fighter[]>('getFighters',[]))
  );
}

getFighter(id : number) : Observable<Fighter>{
  const url = `${this.fightersUrl}/${id}`;
  return this.http.get<Fighter>(url).pipe(
    tap(_ => this.log(`fetched fighter id=${id}`)),
    catchError(this.handleError<Fighter>(`getFighter id=${id}`))
  );
}

updateFighter(fighter : Fighter) : Observable<any> {
  return this.http.put(this.fightersUrl, fighter, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${fighter.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

addFighter(fighter : Fighter): Observable<Fighter>{
  return this.http.post<Fighter>(this.fightersUrl, fighter, this.httpOptions).pipe(
    tap((newFighter : Fighter) => this.log(`added fighter w/ id=${newFighter.id}`)),
    catchError(this.handleError<Fighter>('addFighter')),
  );
}

deleteFighter(fighter : Fighter | number): Observable<Fighter> {
  const id = typeof fighter === 'number' ? fighter : fighter.id;
  const url = `${this.fightersUrl}/${id}`;

  return this.http.delete<Fighter>(url,this.httpOptions).pipe(tap(_ => this.log(`deleted fighter id = ${id}`)),
  catchError(this.handleError<Fighter>('deleteFighter'))
  );
}

searchFighters(term : string) : Observable<Fighter[]> {
  if(!term.trim()){
    return of([]);
  }
  return this.http.get<Fighter[]>(`${this.fightersUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found fighters matching "${term}"`)),
    catchError(this.handleError<Fighter[]>('searchFighters', []))
  );
}

private log(message : string) {
  this.messageService.add(`HeroService: ${message}`);
}

private handleError<T> (operation = 'operation', result?: T){
  return (error : any) : Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  }
}

}
