/* eslint-disable linebreak-style */
export default class Validator {
  static validateUsername(name) {
    const res1 = /^[A-Za-z][\w-]*[^_\W\d-]+$/.test(name) && !(/\d{4}/.test(name));
    if (res1) {
      return true;
    }
    return false;
  }
}
