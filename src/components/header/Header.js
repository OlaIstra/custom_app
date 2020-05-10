import { AppComponent } from "@core/AppComponent";

export class Header extends AppComponent {
  //static className = "app__header";

  constructor($root) {
    super($root);
    this.className = "app__header";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return `
    <input type="text" class="input" value="new table" />
    <div>
      <div class="btn">
        <span class="material-icons">
          exit_to_app
        </span>
      </div>
      <div class="btn">
        <span class="material-icons">
          delete
        </span>
      </div>
    </div>
    `;
  }
}
