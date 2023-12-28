import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gifs } from '../../interfaces/gifs-request.interface';
import { LazyImageComponent } from '../../../shared/components/lazy-image/lazy-image.component';

@Component({
  selector: 'app-card-gifs',
  templateUrl: './card-gifs.component.html',
  standalone: true,
  imports: [CommonModule, LazyImageComponent],
})
export class CardGifsComponent {


  @Input()gif?: Gifs;
  @Output() myevent  = new EventEmitter<boolean>();
  public isCopid: boolean = false;

  copyUrl( url: string ){
    if( url === '') return;
    navigator.clipboard.writeText(url)
              .then( () => {
                this.isCopid = true;
                this.myevent.emit(this.isCopid);
                //console.log(' url copiada');
              } );
              
    console.log(`if( url === '') return;
    navigator.clipboard.writeText(url)
              .then( () => {
                this.isCopid = true;
                this.myevent.emit(this.isCopid);
                console.log(' url copiada');
              } )`);
  }


}
