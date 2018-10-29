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
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
