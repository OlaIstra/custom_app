import { AppComponent } from "@core/AppComponent";

export class Header extends AppComponent {
  //static className = "app__header";

  constructor($root) {
    super();
    this.className = "app__header";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return "<h1>Header</h1>";
  }
}
