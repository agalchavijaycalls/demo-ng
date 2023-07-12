export class User {
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get loginId(): string {
    return this._loginId;
  }

  set loginId(value: string) {
    this._loginId = value;
  }

  constructor(loginId: string, password: string, name: string, email: string) {
    this._loginId = loginId;
    this._password = password;
    this._name = name;
    this._email = email;
  }

  private _loginId: string;
  private _password: string;
  private _name: string;
  private _email: string;

}