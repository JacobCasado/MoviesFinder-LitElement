import { LitElement, html } from 'lit-element';

export class AppShell extends LitElement {


  render() {
    return html`
    <p>hola</p>`;
  }
}
customElements.define('app-shell', AppShell);