import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

Renderer2
declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private googleAnalyticsId: string = 'UA-2446991-1';
  private renderer2: Renderer2;
  private scriptsLoaded: boolean = false;

  constructor(
    private rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document,
    // private _config: RuntimeConfigLoaderService,
    private _router: Router,
  ) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    // this.googleAnalyticsId = this._config.getConfigObjectKey('googleAnalyticsId');
  }

  init() {
    if (!this.scriptsLoaded) {
      this.insertMainScript();
    }
  }

  private insertMainScript() {
    if (this.googleAnalyticsId) {
      const script: HTMLScriptElement = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.onload = this.insertSecondHalfOfScript.bind(this);
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalyticsId}`;
      script.text = '';
      this.renderer2.appendChild(this._document.body, script);
    }
  }

  private insertSecondHalfOfScript() {
    const script: HTMLScriptElement = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = 'src/google-analytics-script.js';
    script.text = '';
    this.renderer2.appendChild(this._document.body, script);
    script.onload = () => {
      this.scriptsLoaded = true;
    };
  }

  trackSinglePageView(event: NavigationEnd) {
    if (this.googleAnalyticsId && this.scriptsLoaded) {
      gtag('config', this.googleAnalyticsId, { page_path: event.urlAfterRedirects });
    }
  }
  
  trackPageViews() {
    return this._router.events.pipe(
      filter(() => this.scriptsLoaded === true),
      filter((evt: RouterEvent) => evt instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        this.trackSinglePageView(event);
      }),
    );
  }

  // trackEvent(
  //   { eventName, eventCategory, eventAction, eventLabel, eventValue } = {
  //     eventName: null,
  //     eventCategory: null,
  //     eventAction: null,
  //     eventLabel: null,
  //     eventValue: null,
  //   },
  // ) {
  //   gtag('event', eventName, {
  //     eventCategory,
  //     eventLabel,
  //     eventAction,
  //     eventValue,
  //   });
  // }


}
