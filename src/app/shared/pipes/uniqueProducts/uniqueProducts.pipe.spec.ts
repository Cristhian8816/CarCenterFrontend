import { UniqueProductsPipe } from './uniqueProducts.pipe';

describe('UniqueProductsPipe', () => {
  it('create an instance', () => {
    const pipe = new UniqueProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
