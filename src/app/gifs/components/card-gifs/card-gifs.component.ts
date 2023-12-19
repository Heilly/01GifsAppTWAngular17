import { Component, Input } from '@angular/core';
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


}
