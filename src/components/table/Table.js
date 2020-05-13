import { AppComponent } from "@core/AppComponent";
import { createTable } from "./table.template";
import { handlerResize } from "./resize";
import { shouldResize, nodeType, matrix, nextSelector } from "./helpers";
import { TableSelection } from "./selection";
import { $ } from "@core/Dom";

export class Table extends AppComponent {
	// static className = "app__table";

	constructor($root, options) {
		super($root, {
			name: "Table",
			listeners: ["mousedown", "keydown", "input"],
			...options,
		});
		this.className = "app__table";
	}

	getClassName() {
		return this.className;
	}

	toHTML() {
		return createTable(20);
	}

	prepare() {
		this.selection = new TableSelection();
	}

	init() {
		super.init();

		const $cell = this.$root.find('[data-id="0:0"]');
		this.selectCell($cell);

		this.$on("formula>input", (text) => {
			this.selection.current.text(text);
		});

		this.$on("formula>done", () => {
			this.selection.current.focus();
		});
	}

	selectCell($cell) {
		this.selection.select($cell);
		this.$dispatch("table>select", $cell);
	}

	onClick() {}

	onMousedown(event) {
		if (shouldResize(event)) {
			handlerResize(event, this.$root);
		}

		if (nodeType(event) === "cell") {
			const $target = $(event.target);
			if (event.shiftKey) {
				const target = $target.id(true);
				const current = this.selection.current.id(true);

				const $cells = matrix(target, current).map((id) =>
					this.$root.find(`[data-id="${id}"]`)
				);
				this.selection.selectGroup($cells);
			} else {
				this.selection.select($target);
			}
		}
	}

	onMousemove() {}

	onMouseup() {}

	onKeydown(event) {
		const keys = [
			"Enter",
			"Tab",
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp",
			"ArrowDown",
		];
		const { key } = event;
		if (keys.includes(key) && !event.shiftKey) {
			event.preventDefault();
			const id = this.selection.current.id(true);
			const $next = this.$root.find(nextSelector(key, id));
			this.selectCell($next);
		}
	}

	onInput(event) {
		this.$dispatch("table>input", $(event.target));
	}
}
