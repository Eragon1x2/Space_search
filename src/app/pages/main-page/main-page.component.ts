import { Component } from '@angular/core';
import { ListComponent } from '../../list/list.component';
import { ResultsComponent } from '../../results/results.component';
import { BaseService } from '../../base.servise';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ListComponent, ResultsComponent,FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  list: any = [];
  next:string = ''; 
  entered_text = '';
  constructor(private baseServise: BaseService){}
  ngOnInit() {
    this.baseServise.getData().subscribe((data: any) => {
      this.list = data.results;
      this.next = data.next;
      console.log(data)
    })
  }
  loadMore() {
    this.baseServise.getMoreData(this.next).subscribe((data: any) => {
      this.list = [...this.list, ...data.results];
      this.next = data.next;
      
    }, (error: any) => {
      console.error('Error occurred while fetching more data:', error);
    }
  ) 

}
  loadByTitle() {
    this.baseServise.getByTitle(this.entered_text).subscribe((data: any) => {
      this.list = data.results;
      this.next = data.next;
    })
  }
}
