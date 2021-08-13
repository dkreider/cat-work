import { Cat } from './cat';

describe('Cat', () => {
  it('should create an instance', () => {
    let cat: Cat = {} as Cat;
    expect(cat).toBeTruthy();
  });
});
