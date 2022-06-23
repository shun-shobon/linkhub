export class Component extends HTMLElement {
  constructor(template: string, style: string) {
    super();
    this.attachShadow({ mode: "open" });
    if (!this.shadowRoot)
      throw new Error("Browser does not support Shadow DOM");

    this.shadowRoot.innerHTML = template;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    this.shadowRoot.append(styleElement);
  }
}
