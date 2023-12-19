import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class LazyImageComponent implements OnInit {

  @Input() url! : string;
  @Input() alt  : string = '';

  public hasLoader : boolean = false;

  ngOnInit(): void {
      if ( !this.url ) throw new Error ('Url property is required')
  }

  onLoad(){
    setTimeout( () => {
      this.hasLoader = true;
    }, 2000 )
  }


}
