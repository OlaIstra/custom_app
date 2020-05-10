import { AppComponent } from "@core/AppComponent";
import { createTable } from "./table.template";

export class Table extends AppComponent {
  //static className = "app__table";

  constructor($root) {
    super($root);
    this.className = "app__table";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return createTable();
  }
}
