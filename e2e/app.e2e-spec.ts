import { TdformsPage } from './app.po';

describe('tdforms App', function() {
  let page: TdformsPage;

  beforeEach(() => {
    page = new TdformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
