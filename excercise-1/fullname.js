"use strict";

const NameParts = {
  firstName: "",
  middleName: "",
  lastName: "",

  setFullName(fullname) {
    const names = fullname.split(" ");
    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    } else if (names.length === 3) {
      this.firstName = names[0];
      this.middleName = names[1];
      this.lastName = names[2];
    }
  },
  getFullName() {
    if (this.hasMiddleName()) {
      return this.firstName + " " + this.middleName + " " + this.lastName;
    } else {
      return this.firstName + " " + this.lastName;
    }
  },
  hasMiddleName() {
    return this.middleName !== "";
  },
};

NameParts.setFullName("Gustav Wiese Pedersen");
console.log(`First name: ${NameParts.firstName}`);
console.log(`Middle name: ${NameParts.middleName}`);
console.log(`Last name: ${NameParts.lastName}`);
console.log(`Full name: ${NameParts.getFullName()}`);
console.log(`Has middle name: ${NameParts.hasMiddleName()}`);
