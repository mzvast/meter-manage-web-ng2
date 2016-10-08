import { ManageNg2Page } from './app.po';

describe('manage-ng2 App', function() {
  let page: ManageNg2Page;

  beforeEach(() => {
    page = new ManageNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
