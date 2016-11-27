import { AssesmentPage } from './app.po';

describe('assesment App', function() {
  let page: AssesmentPage;

  beforeEach(() => {
    page = new AssesmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
