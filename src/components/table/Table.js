import { AppComponent } from "@core/AppComponent";
import { createTable } from "./table.template";
import { handlerResize } from "./resize";
import { shouldResize } from "./helpers";

export class Table extends AppComponent {
	//static className = "app__table";

	constructor($root) {
		super($root, {
			listeners: ["mousedown"],
		});
		this.className = "app__table";
	}

	getClassName() {
		return this.className;
	}

	toHTML() {
		return createTable(20);
	}

	onClick() {}

	onMousedown(event) {
		if (shouldResize(event)) {
			handlerResize(event, this.$root);
		}
	}

	onMousemove() {}

	onMouseup() {}
}
