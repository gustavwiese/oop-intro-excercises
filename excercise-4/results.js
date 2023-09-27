main();

async function main() {
  await buildResultsList();
  displayResults(results);
}

const results = [];

async function fetchResults() {
  const resp = await fetch("results.json");
  const data = await resp.json();
  return data;
}

async function buildResultsList() {
  const originalObjects = await fetchResults();

  for (const orgobj of originalObjects) {
    const resultObj = constructResult(orgobj);
    results.push(resultObj);
  }
}

function displayResults(results) {
  const table = document.querySelector("table#results tbody");
  table.innerHTML = "";
  for (const result of results) {
    const html = /*html*/ `
    <tr>
      <td>${result.date}</td>
      <td>${result.memberId}</td>
      <td>${result.discipline}</td>
      <td>${result.resultType}</td>
      <td>${result.time}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  }
}

function constructResult(resultData) {
  const ResultObject = {
    date: resultData.date,
    memberId: resultData.memberId,
    discipline: resultData.discipline,
    resultType: resultData.resultType,
    time: resultData.time,
  };

  return ResultObject;
}
