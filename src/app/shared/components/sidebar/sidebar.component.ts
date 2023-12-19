import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsserviceService } from '../../../gifs/services/gifsservice/gifsservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {

  public gifsService = inject( GifsserviceService );

  public gifsLists = signal<string[]>([])

  constructor(){
    
  }

  searchTag(tag : string){
    this.gifsService.searchTag(tag)
        .subscribe( );
    
  }

}
