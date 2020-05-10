import { $ } from "@core/Dom";
export class App {
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create("div", "app");

    this.components = this.components.map((Component) => {
      const $el = $.create("div");

      const component = new Component($el);
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
}
