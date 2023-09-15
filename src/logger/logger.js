export class Logger {
  static id = 1;

  #idTag;
  #idTagCss;

  constructor() {
    this.#idTag = '%c[' + Logger.id.toString().padStart(2, '0') + ']';
    this.#idTagCss = 'color: yellow;';

    Logger.id++;
  }

  /**
   * @param {any[]} data
   */
  log(...data) {
    console.log(this.#idTag, this.#idTagCss, ...data);
  }
}
