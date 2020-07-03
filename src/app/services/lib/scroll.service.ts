// --- CORE -------------------------------------
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

// --- RXJS -------------------------------------
import { fromEvent ,  Observable, empty } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public scroll$: Observable<number>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.scroll$ = fromEvent(window, 'scroll').pipe(
        map( event => {
          return window.scrollY || this.document.documentElement.scrollTop;
        }),
        share()
        );
    } else {
      // tslint:disable-next-line: deprecation
      this.scroll$ = empty();
    }
  }
}
