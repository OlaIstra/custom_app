import { range } from "@core/utils";

export const shouldResize = (event) => {
	return event.target.dataset.resize;
};

export const nodeType = (event) => {
	return event.target.dataset.node;
};

export const matrix = (target, current) => {
	const columns = range(current.col, target.col);
	const rows = range(current.row, target.row);

	return columns.reduce((acc, col) => {
		rows.forEach((row) => acc.push(`${row}:${col}`));
		return acc;
	}, []);
};

export const nextSelector = (key, { col, row }) => {
	const MIN_VAlUE = 0;
	switch (key) {
		case "Enter":
		case "ArrowDown":
			row++;
			break;
		case "Tab":
		case "ArrowRight":
			col++;
			break;
		case "ArrowUp":
			row = row - 1 < MIN_VAlUE ? MIN_VAlUE : row - 1;
			break;
		case "ArrowLeft":
			col = col - 1 < MIN_VAlUE ? MIN_VAlUE : col - 1;
			break;
	}

	return `[data-id="${row}:${col}"]`;
};
