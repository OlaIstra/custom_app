import { DomListener } from "@core/DomListener";

export class AppComponent extends DomListener {
	constructor($root, options = {}) {
		super($root, options.listeners);
		this.name = options.name || "";
		this.observer = options.observer;
		this.unsubscribers = [];
		this.prepare();
	}

	// to add settings before initilization
	prepare() {}

	// return component layout
	toHTML() {
		return "";
	}

	// inform listeners about event
	$dispatch(event, ...args) {
		console.log(event, ...args);
		this.observer.dispatch(event, ...args);
	}

	// subscribe on event
	$on(event, fn) {
		const unsub = this.observer.subscribe(event, fn);
		this.unsubscribers.push(unsub);
	}

	// initialize component & add listeners
	init() {
		this.initDOMListeners();
	}

	// remove component & listeners
	destroy() {
		this.removeDOMListeners();
		this.unsubscribers.forEach((unsub) => unsub());
	}
}
