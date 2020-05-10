import { AppComponent } from "@core/AppComponent";

export class Toolbar extends AppComponent {
  //static className = "app__toolbar";

  constructor($root) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
    });
    this.className = "app__toolbar";
  }

  getClassName() {
    return this.className;
  }

  onClick(event) {
    console.log(event.target);
  }

  toHTML() {
    return `
    <div class="btn">
            <span class="material-icons">
              format_align_left
            </span>
          </div>

          <div class="btn">
            <span class="material-icons">
              format_align_center
            </span>
          </div>

          <div class="btn">
            <span class="material-icons">
              format_align_right
            </span>
          </div>

          <div class="btn">
            <span class="material-icons">
              format_bold
            </span>
          </div>

          <div class="btn">
            <span class="material-icons">
              format_italic
            </span>
          </div>

          <div class="btn">
            <span class="material-icons">
              format_underlined
            </span>
          </div>
    `;
  }
}
