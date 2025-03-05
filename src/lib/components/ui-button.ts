import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, property} from "lit/decorators.js";
import {v4 as uuidv4} from "uuid";

type ButtonType = "button" | "submit" | "reset";
type ButtonColor = "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info";

@customElement('ui-button')
export class UiButton extends LitElement {

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
     * The left icon to display
     */
    @property({type: String, attribute: "left-icon"}) leftIcon = "";

    /**
     * The right icon to display
     */
    @property({type: String, attribute: "right-icon"}) rightIcon = "";

    async firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        await import("./ui-icon.ts");
    }

    render() {
        return html`
            <button id="${this.elementId}" name="${this.elementName}" class="ui-button ${this.color}"
                    type="${this.type}"
                    ?disabled="${this.disabled}"
                    ?loading="${this.loading}" @click="${this.handleClick}">
                ${this.leftIcon ? html`
                    <ui-icon name="${this.leftIcon}"></ui-icon>` : null}
                ${this.text}
                ${this.rightIcon ? html`
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

            &:hover {
                background-color: var(--alpha-white-10);
            }

            &[disabled] {
                opacity: 0.5;
                cursor: not-allowed;
            }

            &[loading] {
                pointer-events: none;

                &::after {
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
            }

            &.default {
                background-color: var(--gray-100);
                color: var(--black);

                &:hover {
                    background-color: var(--gray-200);
                    color: var(--black);
                }
            }

            &.primary {
                background-color: var(--primary-400);
                color: var(--white);

                &:hover {
                    background-color: var(--primary-500);
                    color: var(--white);
                }
            }

            &.secondary {
                background-color: var(--secondary-400);
                color: var(--white);

                &:hover {
                    background-color: var(--secondary-500);
                    color: var(--white);
                }
            }

            &.success {
                background-color: var(--success-400);
                color: var(--white);

                &:hover {
                    background-color: var(--success-500);
                    color: var(--white);
                }
            }

            &.error {
                background-color: var(--error-400);
                color: var(--white);

                &:hover {
                    background-color: var(--error-500);
                    color: var(--white);
                }
            }

            &.warning {
                background-color: var(--warning-400);
                color: var(--black);

                &:hover {
                    background-color: var(--warning-500);
                    color: var(--black);
                }
            }

            &.info {
                background-color: var(--info-400);
                color: var(--white);

                &:hover {
                    background-color: var(--info-500);
                    color: var(--white);
                }
            }
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;
}