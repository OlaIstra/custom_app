export class TableSelection {
	constructor() {
		this.group = [];
		this.className = "selected";
		this.current = null;
	}

	select($el) {
		this.clear();
		this.group.push($el);
		this.current = $el;
		$el.focus().addClass(this.className);
	}

	clear() {
		this.group.forEach((elem) => {
			elem.removeClass(this.className);
		});
		this.group = [];
	}

	selectGroup($group) {
		this.clear();
		this.group = $group;
		this.group.forEach((el) => {
			el.addClass(this.className);
		});
	}
}
