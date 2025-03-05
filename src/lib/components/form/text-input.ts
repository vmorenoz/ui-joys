import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {v4 as uuidv4} from "uuid";
import {InputType} from "./form-types.ts";

@customElement('ui-text-input')
export class TextInput extends LitElement {
    /**
     * The id of the input
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the input
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The type of the input
     */
    @property({type: String})
    type: InputType = "text";

    /**
     * The value of the input
     */
    @property({type: String})
    value = "";

    /**
     * The placeholder of the input
     */
    @property({type: String})
    placeholder = "";

    /**
     * Whether the input is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    /**
     * Whether the input is required
     */
    @property({type: Boolean, attribute: "required"})
    required = false;

    /**
     * Whether the input is readonly
     */
    @property({type: Boolean, attribute: "readonly"})
    readonly = false;

    /**
     * Whether the input is invalid
     */
    @property({type: Boolean, attribute: "invalid"})
    invalid = false;

    /**
     * Whether the input is valid
     */
    @property({type: Boolean, attribute: "valid"})
    valid = false;

    /**
     * The error message to display
     */
    @property({type: String, attribute: "error-message"})
    errorMessage = "";

    /**
     * The label to display
     */
    @property({type: String, attribute: "label"})
    label = "";

    /**
     * The icon to display on the left side
     */
    @property({type: String, attribute: "left-icon"})
    leftIcon = "";

    /**
     * The icon to display on the right side
     */
    @property({type: String, attribute: "right-icon"})
    rightIcon = "";

    /**
     * The prefix to display
     */
    @property({type: String, attribute: "prefix"})
    prefix = "";

    /**
     * The suffix to display
     */
    @property({type: String, attribute: "suffix"})
    suffix = "";

    /**
     * The text to display into the left hint
     */
    @property({type: String, attribute: "left-hint"})
    leftHint = "";

    /**
     * The text to display into the right hint
     */
    @property({type: String, attribute: "right-hint"})
    rightHint = "";

    render() {
        return html`
            <div class="ui-text-input">
                ${this.label ? html`
                    <ui-input-label text="${this.label}" ?required="${this.required}"></ui-input-label>` : null}
                <div class="ui-text-input-wrapper ${this.invalid ? "invalid" : ""} ${this.valid ? "valid" : ""}">
                    ${this.leftIcon ? html`
                        <ui-icon name="${this.leftIcon}"></ui-icon>` : null}
                    ${this.prefix ? html`
                        <span class="ui-text-input-prefix">${this.prefix}</span>` : null}
                    <input class="ui-text-input-control" id="${this.elementId}" name="${this.elementName}"
                           type="${this.type}" .value="${this.value}"
                           placeholder="${this.placeholder}" ?disabled="${this.disabled}"
                           ?readonly="${this.readonly}" @input="${this.handleInput}" @change="${this.handleChange}">
                    ${this.suffix ? html`
                        <span class="ui-text-input-suffix">${this.suffix}</span>` : null}
                    ${this.rightIcon ? html`
                        <ui-icon name="${this.rightIcon}"></ui-icon>` : null}
                </div>
                <div class="ui-text-input-hint-container">
                    <ui-input-hint-text text="${this.leftHint}"></ui-input-hint-text>
                    <ui-input-hint-text text="${this.rightHint}"></ui-input-hint-text>
                </div>
            </div>
        `;
    }

    handleInput(event: Event) {
        event.stopPropagation();
        this.value = (event.target as HTMLInputElement).value;
        this.dispatchEvent(new CustomEvent('input', {
            bubbles: true,
            composed: true,
        }));
    }

    handleChange(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            composed: true,
        }));
    }

    handleFocus(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('focus', {
            bubbles: true,
            composed: true,
        }));
    }

    handleBlur(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('blur', {
            bubbles: true,
            composed: true,
        }));
    }

    handleCopy(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('copy', {
            bubbles: true,
            composed: true,
        }));
    }

    handleCut(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('cut', {
            bubbles: true,
            composed: true,
        }));
    }

    handlePaste(event: Event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('paste', {
            bubbles: true,
            composed: true,
        }));
    }

    static styles = css`
        .ui-text-input-hint-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-1);
            margin-top: var(--spacing-1);
        }

        .ui-text-input {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin: 0 var(--spacing-2) var(--spacing-2) 0;
        }

        .ui-text-input-wrapper {
            display: flex;
            gap: var(--spacing-1);
            padding: var(--spacing-2);
            background: var(--gray-50);
            border-radius: var(--border-radius-sm);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0 inset;
        }

        .ui-text-input-wrapper:has(input:focus) {
            background-color: var(--gray-100);
        }

        .ui-text-input-wrapper:has(input:disabled) {
            background-color: var(--gray-200);
        }

        .ui-text-input-control {
            border: none;
            background-color: transparent;
            margin: 0;
            outline: none;
            font-family: inherit;
            font-size: var(--font-size-base);
            font-weight: 400;
            width: 100%;
            
            &[disabled] {
                color: var(--gray-500);
            }
        }

        .ui-text-input-control:disabled {
            cursor: not-allowed;
        }

        .ui-text-input-wrapper.invalid {
            background-color: var(--error-50);
        }

        .ui-text-input-wrapper.valid {
            background-color: var(--success-50);
        }

        .ui-text-input-prefix {
            transform: scale(0.8);
        }

        .ui-text-input-suffix {
            transform: scale(0.8);
        }

        @media (prefers-color-scheme: dark) {
            .ui-text-input-wrapper {
                background-color: var(--alpha-black-50);
                color: var(--white);
            }

            .ui-text-input-wrapper:has(input:focus) {
                background-color: var(--alpha-black-80);
            }

            .ui-text-input-wrapper:has(input:disabled) {
                background-color: var(--alpha-black-30);
            }

            .ui-text-input-wrapper.invalid {
                background-color: var(--error-200);
            }

            .ui-text-input-wrapper.valid {
                background-color: var(--success-200);
            }
        }
    `;
}