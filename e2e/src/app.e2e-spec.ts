import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.sleep(5000);
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Our Team');
  });

});
