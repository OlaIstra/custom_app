import { $ } from "@core/Dom";
import { Observer } from "@core/Observer";
export class App {
	constructor(selector, options) {
		this.$el = $(selector);
		this.components = options.components || [];
		this.observer = new Observer();
	}

	getRoot() {
		const $root = $.create("div", "app");

		const componentoptions = {
			observer: this.observer,
		};

		this.components = this.components.map((Component) => {
			const $el = $.create("div");

			const component = new Component($el, componentoptions);
			if (component.name) {
				window["c" + component.name] = component;
			}
			$el.html(component.toHTML());
			$el.$el.classList.add(component.getClassName());

			$root.append($el);
			return component;
		});
		return $root;
	}

	render() {
		this.$el.append(this.getRoot());
		this.components.forEach((component) => component.init());
	}

	destroy() {
		this.components.forEach((component) => component.destroy());
	}
}
