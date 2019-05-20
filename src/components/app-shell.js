import { LitElement, html, css } from 'lit-element';

export class AppShell extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }

      p {
        color: blue;
      }
    `;
  }

  render() {
    return html`
    <p>hola</p>`;
  }
}
customElements.define('app-shell', AppShell);