import {ProgramingPrint} from './programing-blocks'

// Straight Jasmine testing without Angular's testing support
describe('ProgramingBlock', () => {

  it('ProgramingPrint should print the right value', () => {
    expect(new ProgramingPrint("testing").apply()).toBe('testing');
  });

  it('ProgramingPrint should print the right value', () => {
    expect(new ProgramingPrint("testing").apply()).toBe('testing');
  });


});
