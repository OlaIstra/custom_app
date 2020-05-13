import { AppComponent } from "@core/AppComponent";
import { $ } from "@core/Dom";

export class Formula extends AppComponent {
	//static className = "app__formula";

	constructor($root, options) {
		super($root, {
			name: "Formula",
			listeners: ["input", "click", "keydown"],
			...options,
		});
		this.className = "app__formula";
	}

	getClassName() {
		return this.className;
	}

	toHTML() {
		return `
    <div class="info">fx</div>
    <div class="input" id="formula" contenteditable spellcheck="false"></div>
    `;
	}

	init() {
		super.init();
		this.$formula = this.$root.find("#formula");
		this.$on("table>select", ($cell) => {
			this.$formula.text($cell.text());
		});

		this.$on("table>input", ($cell) => {
			this.$formula.text($cell.text());
		});
	}

	onInput(event) {
		this.$dispatch("formula>input", $(event.target).text());
	}

	onClick(event) {}

	onKeydown(event) {
		const keys = ["Enter", "Tab"];
		if (keys.includes(event.key)) {
			event.preventDefault();
			this.$dispatch("formula>done");
		}
	}
}
