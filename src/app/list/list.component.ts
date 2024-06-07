import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list!: [any];
  @Output() stateChanged = new EventEmitter<string>();
  constructor(private router: Router) {}
  onloadMore() {
    this.stateChanged.emit();
  }
  toNextPage(id: string) {
    this.router.navigate(([`Space_search/articles/${id}`]));
  }
}
