import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {v4 as uuidv4} from "uuid";
import {ButtonColor, ButtonType} from "./button-types.ts";

@customElement('ui-button')
export class Button extends LitElement {

    /**
     * The id of the button
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the button
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The type of the button
     */
    @property({type: String})
    type: ButtonType = "button";

    /**
     * The text to display on the button
     */
    @property({type: String}) text = "Button";

    /**
     * Whether the button is disabled
     */
    @property({type: Boolean}) disabled = false;

    /**
     * Whether the button is loading
     */
    @property({type: Boolean, attribute: "loading"}) loading = false;

    /**
     * The color of the button
     */
    @property({type: String}) color: ButtonColor = "default";

    /**
     * Whether the button has a left icon
     */
    @property({type: Boolean, attribute: "show-left-icon"}) showLeftIcon = false;

    /**
     * The left icon to display
     */
    @property({type: String, attribute: "left-icon"}) leftIcon = "arrow-left";

    /**
     * Whether the button has a right icon
     */
    @property({type: Boolean, attribute: "show-right-icon"}) showRightIcon = false;

    /**
     * The right icon to display
     */
    @property({type: String, attribute: "right-icon"}) rightIcon = "arrow-right";

    render() {
        return html`
            <button id="${this.elementId}" name="${this.elementName}" class="ui-button ${this.color}"
                    type="${this.type}"
                    ?disabled="${this.disabled}"
                    ?loading="${this.loading}" @click="${this.handleClick}">
                ${this.showLeftIcon ? html`
                    <ui-icon name="${this.leftIcon}"></ui-icon>` : null}
                ${this.text}
                ${this.showRightIcon ? html`
                    <ui-icon name="${this.rightIcon}"></ui-icon>` : null}
            </button>
        `;
    }

    handleClick(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('clicked', {
            bubbles: true,
            composed: true,
        }));
    }

    static styles = css`
        .ui-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-2);
            padding: var(--spacing-2) var(--spacing-4);
            border: none;
            border-radius: var(--border-radius-sm);
            font-family: inherit;
            font-size: var(--font-size-base);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            margin: 0 var(--spacing-2) var(--spacing-2) 0;
        }

        .ui-button:hover {
            background-color: var(--alpha-white-10);
        }

        .ui-button[disabled] {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .ui-button[loading] {
            pointer-events: none;
        }

        .ui-button[loading]::after {
            content: "";
            display: block;
            width: 1rem;
            height: 1rem;
            border: 2px solid;
            border-radius: 50%;
            border-top-color: transparent;
            border-left-color: transparent;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        /* Colors */

        .ui-button.default {
            background-color: var(--gray-100);
            color: var(--black);
        }

        .ui-button.default:hover {
            background-color: var(--gray-200);
            color: var(--black);
        }

        .ui-button.primary {
            background-color: var(--primary-400);
            color: var(--white);
        }

        .ui-button.primary:hover {
            background-color: var(--primary-500);
            color: var(--white);
        }

        .ui-button.secondary {
            background-color: var(--secondary-400);
            color: var(--white);
        }

        .ui-button.secondary:hover {
            background-color: var(--secondary-500);
            color: var(--white);
        }

        .ui-button.success {
            background-color: var(--success-400);
            color: var(--white);
        }

        .ui-button.success:hover {
            background-color: var(--success-500);
            color: var(--white);
        }

        .ui-button.error {
            background-color: var(--error-400);
            color: var(--white);
        }

        .ui-button.error:hover {
            background-color: var(--error-500);
            color: var(--white);
        }

        .ui-button.warning {
            background-color: var(--warning-400);
            color: var(--black);
        }

        .ui-button.warning:hover {
            background-color: var(--warning-500);
            color: var(--black);
        }

        .ui-button.info {
            background-color: var(--info-400);
            color: var(--white);
        }

        .ui-button.info:hover {
            background-color: var(--info-500);
            color: var(--white);
        }
    `;
}