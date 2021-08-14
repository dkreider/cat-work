import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return Hello World...', () => {
    let expected, actual;
    const pipe = new TrimPipe();

    expected = "Hello World...";
    actual = pipe.transform("Hello World How Are You", 11);

    expect(actual).toEqual(expected);
  })
});
