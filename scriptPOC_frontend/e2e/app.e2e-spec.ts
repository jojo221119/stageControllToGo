import { ScriptPOCPage } from './app.po';

describe('script-poc App', function() {
  let page: ScriptPOCPage;

  beforeEach(() => {
    page = new ScriptPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
