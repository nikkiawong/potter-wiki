import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharactersComponent } from './characters/characters.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'characters/:$key',
    component: CharactersComponent
  },
  {
    path: 'movies/:$key',
    component: MoviesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
