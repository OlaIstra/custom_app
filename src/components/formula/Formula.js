import { AppComponent } from "@core/AppComponent";

export class Formula extends AppComponent {
  //static className = "app__formula";

  constructor() {
    super();
    this.className = "app__formula";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return "<h1>Formula</h1>";
  }
}
