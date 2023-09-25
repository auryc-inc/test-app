class TableComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        ${window.TableStyle}
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
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        ${window.TableRowStyle}
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
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
       ${window.TableColStyle}
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


