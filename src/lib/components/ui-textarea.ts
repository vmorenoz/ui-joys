import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement, PropertyValues} from "lit";
import {v4 as uuidv4} from "uuid";

@customElement('ui-textarea')
export class UiTextarea extends LitElement {
    /**
     * The id of the textarea
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the textarea
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The value of the textarea
     */
    @property({type: String})
    value = "";

    /**
     * The placeholder of the textarea
     */
    @property({type: String})
    placeholder = "";

    /**
     * Whether the textarea is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    /**
     * Whether the textarea is readonly
     */
    @property({type: Boolean, attribute: "readonly"})
    readonly = false;

    /**
     * Whether the textarea is required
     */
    @property({type: Boolean, attribute: "required"})
    required = false;

    /**
     * Whether the textarea is invalid
     */
    @property({type: Boolean, attribute: "invalid"})
    invalid = false;

    /**
     * Whether the textarea is valid
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
     * The text to display into the left hint
     */
    @property({type: String, attribute: "left-hint"})
    leftHint = "";

    /**
     * The text to display into the right hint
     */
    @property({type: String, attribute: "right-hint"})
    rightHint = "";

    async firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        await import("./ui-hint-text.ts")
        await import("./ui-input-label.ts")
    }

    render() {
        return html`
            <div class="ui-textarea">
                ${this.label ? html`
                    <ui-input-label text="${this.label}" ?required="${this.required}"></ui-input-label>` : null}
                <div class="ui-textarea-wrapper ${this.invalid ? "invalid" : ""} ${this.valid ? "valid" : ""}">
                    <textarea class="ui-textarea-control" id="${this.elementId}" name="${this.elementName}"
                              placeholder="${this.placeholder}" ?disabled="${this.disabled}"
                              ?readonly="${this.readonly}" @input="${this.handleInput}"
                              @change="${this.handleChange}">${this.value}</textarea>
                </div>
                <div class="ui-textarea-hint-container">
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

    static styles = css`

        .ui-textarea-hint-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-1);
            margin-top: var(--spacing-1);
        }

        .ui-textarea {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin: 0 var(--spacing-2) var(--spacing-2) 0;
        }

        .ui-textarea-wrapper {
            display: flex;
            align-items: start;
            gap: var(--spacing-1);
            padding: var(--spacing-2);
            background: var(--gray-50);
            border-radius: var(--border-radius-sm);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0 inset;
        }

        .ui-textarea-wrapper:has(textarea:focus) {
            background-color: var(--gray-100);
        }

        .ui-textarea-wrapper:has(textarea:disabled) {
            background-color: var(--gray-200);
        }

        .ui-textarea-control {
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
                cursor: not-allowed;
            }
        }

        .ui-textarea-wrapper.invalid {
            background-color: var(--error-50);
        }

        .ui-textarea-wrapper.valid {
            background-color: var(--success-50);
        }

        @media (prefers-color-scheme: dark) {
            .ui-textarea-wrapper {
                background-color: var(--alpha-black-50);
                color: var(--white);
            }

            .ui-textarea-wrapper:has(textarea:focus) {
                background-color: var(--alpha-black-80);
            }

            .ui-textarea-wrapper:has(textarea:disabled) {
                background-color: var(--alpha-black-30);
            }

            .ui-textarea-wrapper.invalid {
                background-color: var(--error-200);
            }

            .ui-textarea-wrapper.valid {
                background-color: var(--success-200);
            }
        }
    `;
}