export class Logger {
  static id = 1;

  #idTag;
  #idTagCss;

  constructor() {
    this.#idTag = '%c[' + Logger.id.toString().padStart(2, '0') + ']';
    this.#idTagCss = 'color: yellow;';

    Logger.id++;
  }

  log(...args) {
    console.log(this.#idTag, this.#idTagCss, ...args);
  }
}
