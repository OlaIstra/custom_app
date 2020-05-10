const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (idx, content) => {
  return `
    <div class="row">
        <div class="row-info">${idx ? idx : ""}</div>
        <div class="row-data">${content}</div>
    </div>
    `;
};

const createColumn = (el) => {
  return `
        <div class="column">${el}</div>
      `;
};

const createCell = () => {
  return `
        <div class="cell" contenteditable spellcheck="false"></div>
    `;
};

const toChar = (_, idx) => {
  return String.fromCharCode(CODES.A + idx);
};

export const createTable = (rowsAmount = 20) => {
  const colsAmount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsAmount)
    .fill("")
    .map(toChar)
    .map(createColumn)
    .join("");

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsAmount; i++) {
    const cells = new Array(colsAmount).fill("").map(createCell).join("");

    rows.push(createRow(i + 1, cells));
  }

  return rows.join("");
};
