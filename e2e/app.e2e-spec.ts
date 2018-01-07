import { ToDoPage } from './app.po';

describe('to-do App', () => {
  let page: ToDoPage;

  beforeEach(() => {
    page = new ToDoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
