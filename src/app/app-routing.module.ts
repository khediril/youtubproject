import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouTubeSearchComponent } from './youTubeSearch/component/you-tube-search/you-tube-search.component';

const routes: Routes = [{ path: 'youtube', component: YouTubeSearchComponent }
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
