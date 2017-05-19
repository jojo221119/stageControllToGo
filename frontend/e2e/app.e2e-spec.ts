import { StageControlToGoFrontendPage } from './app.po';

describe('stage-control-to-go-frontend App', () => {
  let page: StageControlToGoFrontendPage;

  beforeEach(() => {
    page = new StageControlToGoFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
