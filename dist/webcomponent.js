class TableRow extends HTMLElement {
    constructor() {
        super();
        let style = document.createElement("style");

        style.textContent = `
            tr {
            }
            td {
                padding: 0.5em;
                border: 1px solid black;
            }   
        `;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(style);
        shadowRoot.innerHTML = `
            <tr>
            <slot name="patientName"></slot>
            <slot name="age"></slot>
            <slot name="gender"></slot>
            <slot name="diagnosis"></slot>
            <slot name="medication"></slot>
            <slot name="doctor"></slot>
            <slot name="admissionDate"></slot>
            <slot name="dischargeDate"></slot>
            <slot name="roomNumber"></slot>
            <slot name="allergies"></slot>
            <slot name="bloodType"></slot>
            <slot name="insuranceProvider"></slot>
            <slot name="emergencyContact"></slot>
            <slot name="notes"></slot>
        </tr >
            `
    }

}


window.customElements.define('table-row', TableRow);