import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";

@customElement("ui-option")
export class UiOption extends LitElement {
    /**
     * Value of the option
     */
    @property({type: String})
    value = "";

    /**
     * Label of the option
     */
    @property({type: String})
    label = "";

    /**
     * Whether the option is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}