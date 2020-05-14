/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
export default class Settings {
  constructor() {
    this.defaultOptions = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.allOptions = [{ theme: ['dark', 'light', 'gray'] }, { music: ['trance', 'pop', 'rock', 'chillout', 'off'] }, { difficulty: ['easy', 'hard', 'nightmare'] }];
    this.userOptions = new Map(this.defaultOptions);
  }

  changeSettings(option, choise) {
    const search = this.allOptions.find((element) => element.hasOwnProperty(option));
    if (search === undefined) {
      return Error('Такой настройки не существует');
    }
    const selection = search[option];
    if (selection.includes(choise) === false) {
      return Error('Такой опции не существует');
    }
    this.userOptions.set(option, choise);
  }

  get settings() {
    return this.userOptions;
  }
}
