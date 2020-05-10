import { AppComponent } from "@core/AppComponent";

export class Formula extends AppComponent {
  //static className = "app__formula";

  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "click"],
    });
    this.className = "app__formula";
  }

  getClassName() {
    return this.className;
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log(this.$root);
    console.log("Formula onInput", event.target.textContent.trim());
  }

  onClick(event) {
    console.log(this.$root);
    console.log("Formula onInput", event.target.textContent.trim());
  }
}
