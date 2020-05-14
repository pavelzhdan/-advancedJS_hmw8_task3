import Settings from '../../index';

test('incorrect setting', () => {
  const game = new Settings();


  expect(game.changeSettings('muic', 'off')).toEqual(Error('Такой настройки не существует'));
});

test('incorrect setting option', () => {
  const game = new Settings();


  expect(game.changeSettings('music', 'of')).toEqual(Error('Такой опции не существует'));
});

test('settings output', () => {
  const game = new Settings();
  game.changeSettings('music', 'off');
  const result = new Map([['theme', 'dark'], ['music', 'off'], ['difficulty', 'easy']]);
  expect(game.settings).toEqual(result);
});


/* const game = new Settings();

console.log(game);
game.changeSettings('music', 'off');
console.log(game);


console.log(game.settings); */
