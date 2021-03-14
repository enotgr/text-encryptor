"use strict";

class TextEncryptor {
  static encrypt(str, key) {
    return this._encrypt(str, key);
  }

  static decrypt(str, key) {
    return this._encrypt(str, key, true);
  }

  static _encrypt(str, key, decrypt = false) {
    const chCodeOffset = 42;
    const minChCode = 0;
    const maxChCode = 7423;

    let codes = [];

    for (let i = 0; i < str.length; i++) {
      const keyChCode = key.charCodeAt(i % key.length);
      let chCode = str.charCodeAt(i);

      if (decrypt) {
        chCode -= keyChCode - chCodeOffset;
      } else {
        chCode += keyChCode - chCodeOffset;
      }

      if (chCode < minChCode) {
        chCode += chCodeOffset;
      }

      if (chCode > maxChCode) {
        chCode -= chCodeOffset;
      }

      codes.push(chCode);
    }

    return String.fromCharCode(...codes);
  }
}
