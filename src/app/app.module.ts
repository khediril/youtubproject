import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { YouTubeSearchComponent } from './youTubeSearch/component/you-tube-search/you-tube-search.component';
import { youTubeSearchInjectables } from './youTubeSearch/service/you-tube-search.injectables';
import { SearchResultComponent } from './youTubeSearch/component/search-result/search-result.component';
import { SearchBoxComponent } from './youTubeSearch/component/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,

    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
