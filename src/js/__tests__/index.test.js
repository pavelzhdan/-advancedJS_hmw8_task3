import Settings from '../../index';

test('settings output', () => {
  const game = new Settings(['music', 'off']);
  const result = new Map([['theme', 'dark'], ['music', 'off'], ['difficulty', 'easy']]);
  expect(game.settings).toEqual(result);
});
