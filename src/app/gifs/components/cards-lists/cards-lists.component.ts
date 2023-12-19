import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsserviceService } from '../../services/gifsservice/gifsservice.service';

import { Gifs } from '../../interfaces/gifs-request.interface';
import { CardGifsComponent } from '../card-gifs/card-gifs.component';

@Component({
  selector: 'app-cards-lists',
  templateUrl: './cards-lists.component.html',
  standalone: true,
  imports: [CommonModule, CardGifsComponent],
})
export class CardsListsComponent {
  public gifsService = inject( GifsserviceService );
  public gifsList = computed ( () => this.gifsService.gifsList() );



  constructor(){
    
  }
}
