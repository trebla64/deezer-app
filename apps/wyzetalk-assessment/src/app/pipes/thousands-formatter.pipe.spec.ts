import { ThousandsFormatterPipe } from './thousands-formatter.pipe';

describe('ThousandsFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new ThousandsFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('#transform gives the correct output', () => {
    const pipe = new ThousandsFormatterPipe();
    const transformed = pipe.transform(12876);
    expect(transformed).toBe('12.88k');
  });
});
