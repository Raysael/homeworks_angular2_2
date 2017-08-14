import { LtwoPage } from './app.po';

describe('ltwo App', () => {
  let page: LtwoPage;

  beforeEach(() => {
    page = new LtwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
