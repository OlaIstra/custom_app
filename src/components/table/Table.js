import { AppComponent } from "@core/AppComponent";

export class Table extends AppComponent {
  //static className = "app__table";

  constructor() {
    super();
    this.className = "app__table";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return "<h1>Table</h1>";
  }
}
