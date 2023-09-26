class TableComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(window.TableStyle);
        shadow.adoptedStyleSheets = [sheet];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <table>
          <slot></slot>
        </table>
      `;
    }
}

customElements.define('table-component', TableComponent);


////////////////////////////////////////////////


class TableRowComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(window.TableRowStyle);
        shadow.adoptedStyleSheets = [sheet];
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        </style>
        <div>
          <slot></slot>
        </div>
      `;
    }
}

customElements.define('table-row', TableRowComponent);

////////////////////////////////////////////////

class TableCellComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(window.TableColStyle);
      shadow.adoptedStyleSheets = [sheet];
      this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        :host {
            display: inline-block;
            min-width: 100px;
            max-width: 100px;
            padding: 0.5em;
        }
        </style>
        <td>
          <slot></slot>
        </td>
      `;
    }
}

customElements.define('table-cell', TableCellComponent);


