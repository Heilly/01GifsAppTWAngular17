import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardsListsComponent } from '../../components/cards-lists/cards-lists.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SearchBoxComponent, CardsListsComponent],
})
export default class LayoutComponent {
  
}
