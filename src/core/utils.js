export const capitalize = (string) => {
	if (typeof string !== "string") {
		return "";
	}

	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const range = (start, end) => {
	if (start > end) {
		[end, start] = [start, end];
	}
	return new Array(end - start + 1).fill("").map((_, idx) => start + idx);
};
