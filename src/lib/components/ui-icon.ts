import {css, html, LitElement, unsafeCSS} from "lit";
import {customElement, property} from "lit/decorators.js";
import styles from "iconoir/css/iconoir.css?inline";

@customElement('ui-icon')
export class UiIcon extends LitElement {
    /**
     * The name of the icon to display
     */
    @property({type: String})
    name = "";

    static styles = [
        unsafeCSS(styles),
        css`
            :host {
                display: flex;
                align-items: center;
                font-size: var(--font-size-lg);
            }
        `
    ];

    render() {
        return html`
            <i class="iconoir-${this.name}"></i>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ui-icon': UiIcon;
    }
}