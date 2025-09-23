import { html, LitElement } from 'lit';
class AuthElement extends LitElement {
  static properties = {
    name: { type: String },
  };
  render() {
    let template;
    if (this.name) {
      template = html`
        <p>Selamat datang, ${this.name}</p>

        <p><button @click=${this._logout}>Keluar</button></p>
      `;
    } else {
      template = html`
        <p>Silakan masuk terlebih dulu:</p>

        <p><button @click=${this._login}>Masuk</button></p>
      `;
    }
    return template;
  }
  _login() {
    this.name = 'John Doe';
  }
  _logout() {
    this.name = null;
  }
}
customElements.define('auth-element', AuthElement);
