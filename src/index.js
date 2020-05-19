/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
export default class Settings {
  constructor(...rest) {
    this.defaultOptions = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.allOptions = [{ theme: ['dark', 'light', 'gray'] }, { music: ['trance', 'pop', 'rock', 'chillout', 'off'] }, { difficulty: ['easy', 'hard', 'nightmare'] }];
    this.userOptions = new Map();
    this.enterUserOption = [...rest].forEach((element) => this.userOptions.set(element[0], element[1]));
  }

  get settings() {
    const returnOptions = this.defaultOptions;
    this.userOptions.forEach((value, key) => {
      returnOptions.set(key, value);
    });
    return returnOptions;
  }
}
