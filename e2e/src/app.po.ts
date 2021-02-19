import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown>  { 
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  getTitleText(): Promise<string> {
    return element(by.css('body > app-root > app-home > div > div > div > div > div > div > div > div.dashboard__heading > h2')).getText() as Promise<string>;
  }
}
