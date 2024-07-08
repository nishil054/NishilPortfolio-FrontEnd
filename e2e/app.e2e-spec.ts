import { NishilPortTemplatePage } from './app.po';

describe('NishilPort App', function() {
  let page: NishilPortTemplatePage;

  beforeEach(() => {
    page = new NishilPortTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
