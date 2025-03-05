import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

type HintColor = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";

@customElement('ui-input-hint-text')
export class UiHintText extends LitElement {
    /**
     * The text to display
     */
    @property({type: String})
    text = "";

    /**
     * The color of the hint text
     */
    @property({type: String, attribute: "color"})
    color: HintColor = "default";

    render() {
        return html`
            <div class="${this.color}">${this.text}</div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            font-size: var(--font-size-xs);
            color: var(--gray-500);
        }

        .primary {
            color: var(--primary-500);
        }

        .secondary {
            color: var(--secondary-500);
        }

        .success {
            color: var(--success-500);
        }

        .error {
            color: var(--error-500);
        }

        .warning {
            color: var(--warning-500);
        }

        .info {
            color: var(--info-500);
        }

        .gray {
            color: var(--gray-500);
        }

        @media (prefers-color-scheme: dark) {
            :host {
                color: var(--alpha-white-60);
            }
        }
    `;
}