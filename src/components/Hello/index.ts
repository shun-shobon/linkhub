import template from "./template.html";

export class Hello extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = template;
  }
}
