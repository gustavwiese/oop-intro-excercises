"use strict";

function constructNameParts(fullName) {
  const NameParts = {
    _firstName: undefined,
    _middleName: undefined,
    _lastName: undefined,
    set fullName(fullName) {
      const names = fullName.split(" ");

      if (names.length === 3) {
        this._firstName = names[0];
        this._middleName = names[1];
        this._lastName = names[2];
      } else {
        this._firstName = names[0];
        this._lastName = names[1];
      }
    },
    get fullName() {
      if (!this._middleName) {
        return `${this._firstName} ${this._lastName}`;
      } else {
        return `${this._firstName} ${this._middleName} ${this._lastName}`;
      }
    },
    hasMiddleName: function () {
      if (this._middleName) {
        return true;
      } else {
        return false;
      }
    },
    _age: 0,
    set age(age) {
      this._age = age;
    },
    get age() {
      return this._age;
    },
  };

  NameParts.fullName = fullName;

  return NameParts;
}

const gustav = constructNameParts("Gustav Wiese Pedersen");
gustav.age = 24;
Object.defineProperty(gustav, "_age", {value:25});
console.log(gustav);
