import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Gifs, GifsRequest } from '../../interfaces/gifs-request.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsserviceService {
  private http = inject( HttpClient );

  public gifsList = signal<Gifs[]>([]);
  private _tagsHistory = signal<string[]>([]);
  private apiKey:       string = '4xa70ClozohrCPBPz1OKrYU8DPBPCWKs';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  public tagsHistory = computed( () => this._tagsHistory() );

   constructor() {
    this.loadLocalStorage();
   }

   addTagHistory(tag: string) {
    tag = tag.toLowerCase();

    this._tagsHistory.update( (value) => {
      if( value.includes(tag) ){
        //value = value.filter( (tagList) => tagList !== tag);
        //value = [tag, ...value];
        value = [tag, ...value.filter((tagList) => tagList !== tag)];
      } else {
        value = [tag, ...value];   
      }
    value.splice(10);
    return value;
    } )
    this.saveLocalStorage();
  }

  searchTag( tag: string ): Observable<Gifs[]>{

    const params = new HttpParams()
                        .set('api_key', this.apiKey)
                        .set('q', tag)
                        .set('limit', '10')

    return this.http.get<GifsRequest>(`${this.serviceUrl}/search`, {params})
                    .pipe(
                      map( value => value.data ),
                      tap( data => {
                        this.gifsList.set(data);
                        this.addTagHistory(tag)
                      } ),
                      catchError( err => of([]))
                    )      
  }
  saveLocalStorage(){
    localStorage.setItem('token', JSON.stringify( this.tagsHistory() ))
  }
  
  loadLocalStorage(){
    if( !localStorage.getItem('token') ) return;
    this._tagsHistory.update( value => value = JSON.parse(localStorage.getItem('token')!));
    this.searchTag(this.tagsHistory()[0]).subscribe();
  }



   
}
