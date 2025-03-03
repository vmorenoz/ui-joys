import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {ColorType} from "./form-types.ts";

@customElement('ui-input-label')
export class InputLabel extends LitElement {
    /**
     * The text to display on the label
     */
    @property({type: String}) text = "Label";

    /**
     * The color of the label
     */
    @property({type: String}) color: ColorType = "default";

    /**
     * Whether the label is required
     */
    @property({type: Boolean, attribute: "required"}) required = false;

    /**
     * Whether the label is disabled
     */
    @property({type: Boolean, attribute: "disabled"}) disabled = false;

    render() {
        return html`
            <label class="ui-input-label ${this.color}" ?disabled="${this.disabled}">
                ${this.text} ${this.required ? html`<span class="required">*</span>` : null}
            </label>
        `;
    }

    static styles = css`
        .ui-input-label {
            display: block;
            margin-bottom: var(--spacing-1);
            font-family: inherit;
            font-size: var(--font-size-sm);
            letter-spacing: .015rem;
            font-weight: 500;
            color: var(--alpha-black-70);
        }

        .ui-input-label[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .required{
            color: var(--error-500);
        }

        /* Colors */
        .ui-input-label.primary {
            color: var(--primary-500);
        }

        .ui-input-label.secondary {
            color: var(--secondary-500);
        }

        .ui-input-label.success {
            color: var(--success-500);
        }

        .ui-input-label.error {
            color: var(--error-500);
        }

        .ui-input-label.warning {
            color: var(--warning-500);
        }

        .ui-input-label.info {
            color: var(--info-500);
        }
        
        .ui-input-label.gray {
            color: var(--gray-500);
        }
        
        @media (prefers-color-scheme: dark) {
            .ui-input-label {
                color: var(--alpha-white-80);
            }
        }
    `;
}