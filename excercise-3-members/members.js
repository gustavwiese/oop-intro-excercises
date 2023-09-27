main();

async function main() {
  await buildMembersList();
  displayMembers(members);
}

const members = [];

async function fetchMembers() {
  const resp = await fetch("members.json");
  const data = await resp.json();
  return data;
}

async function buildMembersList() {
  const originalObjects = await fetchMembers();

  for (const orgobj of originalObjects) {
    const memberObj = constructMember(orgobj);
    members.push(memberObj);
  }
}

function displayMembers(members) {
  const table = document.querySelector("table#members tbody");
  table.innerHTML = "";
  for (const member of members) {
    const html = /*html*/ `
    <tr>
      <td>${member.name}</td>
      <td>${member.active}</td>
      <td>${member.birthday}</td>
      <td>${member.getAge()}</td>
      <td>${member.getJuniorSeniorStatus()}</td>
      <td>${member.email}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  }
}

function constructMember(memberdata) {
  const rawBirthDate = new Date(memberdata.dateOfBirth);
  const options = { day: "numeric", month: "short", year: "numeric" };

  const MemberObject = {
    name: memberdata.firstName,
    active: memberdata.isActiveMember,
    competitive: memberdata.isCompetitive,
    birthday: rawBirthDate.toLocaleDateString("da-DK", options),
    email: memberdata.email,
    gender: memberdata.gender,
    image: memberdata.image,
    hasPayed: memberdata.hasPayed,
    getAge: () => {
      const today = new Date();
      const birthday = rawBirthDate;
      let age = today.getFullYear() - birthday.getFullYear();
      return age;
    },
    isJunior: function () {
      const age = this.getAge();
      return age < 18;
    },
    isSenior: function () {
      const age = this.getAge();
      return age >= 18;
    },
    getJuniorSeniorStatus: function () {
      if (this.isJunior()) {
        return "Junior";
      } else {
        return "Senior";
      }
    },
  };

  return MemberObject;
}
