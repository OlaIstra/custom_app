const CODES = {
  A: 65,
  Z: 90,
};

const createRow = (idx, content) => {
  const resize = idx ?
		'<div class="row-resize" data-resize="row"></div>' :
		'';
  return `
    <div class="row" data-type='resizable'>
        <div class="row-info">${idx ? idx : ''}${resize}</div>
        <div class="row-data">${content}</div>
    </div>
    `;
};

const createColumn = (el, idx) => {
  return `
        <div class="column" data-type='resizable' data-col="${idx}">
          ${el}
          <div class="col-resize" data-resize="col"></div>
        </div>
      `;
};

const createCell = (rowNum) => (_, colNum) => {
  return `
		 <div 
			class="cell" 
			contenteditable 
			spellcheck="false" 
			data-node="cell"
			data-col="${colNum}" 
			data-id="${rowNum}:${colNum}">
		</div>
    `;
};

const toChar = (_, idx) => {
  return String.fromCharCode(CODES.A + idx);
};

export const createTable = (rowsAmount = 20) => {
  const colsAmount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsAmount)
      .fill('')
      .map(toChar)
      .map(createColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsAmount; i++) {
    const cells = new Array(colsAmount)
        .fill('')
        .map(createCell(i))
        .join('');

    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
};
