import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../../model/search-result';
import { YouTubeSearchService } from '../../service/you-tube-search.service';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchMap, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}

  ngOnInit() {
    // const el = document.getElementById('my-element');
    const keyUp = fromEvent(this.el.nativeElement, 'keyup'); // keUp est un observable
    keyUp.pipe(map((e: any) => e.target.value),
               filter((text: string) => text.length > 1),
               debounceTime(250),
               tap(() => {
                 return this.loading.emit(true);
               }),
               switchMap((query: string ) => this.youtube.search(query))
              ).
              subscribe(
                (results: SearchResult[]) => {
                    this.loading.emit(false);
                    this.results.emit(results);
                },
                (err: any) => { // on error
                console.log(err);
                this.loading.emit(false);
                },
                () => { // on completion
                this.loading.emit(false);
                }
                );

  }
}
