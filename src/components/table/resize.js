import { $ } from "@core/Dom";

export const handlerResize = (event, $root) => {
	const $target = $(event.target);
	$target.css({
		opacity: 1,
		bottom: "-5000px",
	});
	const $parent = $target.closest('[data-type="resizable"]');
	const coords = $parent.getCoords();
	const colNum = $parent.data.col;
	const cells = $root.findElems(`[data-col="${colNum}"]`);
	const type = $target.data.resize;
	let width = null;
	let height = null;

	document.onmousemove = (e) => {
		if (type === "col") {
			const delta = e.pageX - coords.right;
			width = coords.width + delta + "px";
			$target.css({
				left: width,
			});
		} else {
			const delta = e.pageY - coords.bottom;
			height = coords.height + delta + "px";
			$target.css({
				top: height,
				right: "-5000px",
			});
		}
	};

	document.onmouseup = () => {
		$target.css({
			opacity: 0,
			bottom: 0,
			right: 0,
		});

		if (type === "col") {
			$parent.css({
				width: width,
			});
			cells.forEach((cell) => {
				cell.style.width = width;
			});
		} else {
			$parent.css({
				height: height,
			});
		}
		document.onmousemove = null;
		document.onmouseup = null;
	};
};
