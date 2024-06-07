import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
export const routes: Routes = [
    {path: 'Space_search', component: MainPageComponent},
    { path: 'Space_search/articles/:id', component: AboutComponent }
  ];