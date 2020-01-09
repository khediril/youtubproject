import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../model/search-result';
export const YOUTUBE_API_KEY = "AIzaSyDlBL8vA5qttQzhe2dkszjVFHl_l6j6J2A";
export const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";
@Injectable({
  providedIn: 'root'
})
export class YouTubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}
  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl).pipe(map(response => {
      return  (response['items'] as any).map(item => {
         console.log('raw item', item); // uncomment if you want to debug
         return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      }) as any;
    }));
  }
}
