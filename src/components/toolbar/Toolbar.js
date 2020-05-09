import { AppComponent } from "@core/AppComponent";

export class Toolbar extends AppComponent {
  //static className = "app__toolbar";

  constructor() {
    super();
    this.className = "app__toolbar";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return "<h1>Toolbar</h1>";
  }
}
