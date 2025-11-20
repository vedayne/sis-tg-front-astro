
export class Validators {
  static get documentId () {
    return /^[a-zA-Z0-9_-]+$/
  }

  static get email () {
    return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]{2,})+$/
  }

  static get password () {
    return  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
  }

  static get birthDate () {
    return /^\d{4}-\d{2}-\d{2}$/
  }

  static get captcha () {
    return /^[A-Za-z0-9]{6}$/
  }
}
