"use strict";

import fs from "fs/promises";

// const NameParts = {
//   firstName: "",
//   middleName: "",
//   lastName: "",

//   setFullName(fullname) {
//     const names = fullname.split(" ");
//     if (names.length === 2) {
//       this.firstName = names[0];
//       this.lastName = names[1];
//     } else if (names.length === 3) {
//       this.firstName = names[0];
//       this.middleName = names[1];
//       this.lastName = names[2];
//     }
//   },
//   getFullName() {
//     if (this.hasMiddleName()) {
//       return this.firstName + " " + this.middleName + " " + this.lastName;
//     } else {
//       return this.firstName + " " + this.lastName;
//     }
//   },
//   hasMiddleName() {
//     return this.middleName !== "";
//   },
// };

// NameParts.setFullName("Gustav Wiese Pedersen");
// console.log(`First name: ${NameParts.firstName}`);
// console.log(`Middle name: ${NameParts.middleName}`);
// console.log(`Last name: ${NameParts.lastName}`);
// console.log(`Full name: ${NameParts.getFullName()}`);
// console.log(`Has middle name: ${NameParts.hasMiddleName()}`);

function constructNameParts(fullname) {
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
  NameParts.setFullName(fullname);

  return NameParts;
}

function displayNameParts(namepart) {
  console.log(
    `First Name: ${namepart.firstName} - Middle Name: ${namepart.middleName} - Last Name: ${namepart.lastName}`
  );
  console.log(`Full name: ${namepart.getFullName()}`);
  console.log("--------------------------------------------------");
}

// const harry = constructNameParts("Harry James Potter");
// const ron = constructNameParts("Ronald Weasly");

// const studentNames = [harry, ron];

// function displayStudentDetails(array) {
//   array.forEach((student, index) => {
//     console.log(`Student ${index + 1} Details`);
//     displayNameParts(student);
//   });
// }

function createArray(jsonData) {
  return jsonData.map((object) => {
    const namePart = constructNameParts(object.fullname);
    return namePart;
  });
}
async function loadJSON() {
  const data = await fs.readFile("data.json");
  const jsonData = JSON.parse(data);
  const namePartsArray = createArray(jsonData);
  namePartsArray.forEach((namepart, index) => {
    console.log(`NameParts ${index + 1}`);
    displayNameParts(namepart);
  });
}

loadJSON();
