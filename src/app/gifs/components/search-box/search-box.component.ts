import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsserviceService } from '../../services/gifsservice/gifsservice.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class SearchBoxComponent {
  
  
  public gifService = inject(GifsserviceService)

  @ViewChild('input') searchInput! : ElementRef<HTMLInputElement>

  
  constructor(){
  }

  searchGifs(){
    const tag = this.searchInput.nativeElement.value;
    if(!tag) return;

    this.gifService.addTagHistory( tag );
    this.searchInput.nativeElement.value = '';

    this.gifService.searchTag(tag)
          .subscribe( data => console.log(data));
  }

  
}
