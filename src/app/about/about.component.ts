import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../base.servise';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  productId = '';
  product: any = {};
  constructor(private route: ActivatedRoute,private baseServise: BaseService,private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // Fetch the product using the id
    });
    this.baseServise.getById(this.productId).subscribe((data: any) => {
      this.product = data;
      
    }, (error: any) => {
      console.error('Error occurred while fetching more data:', error);
    }
  )}
  onGoBack() {
    this.router.navigate(([`Space_search/`]));
  }
}
