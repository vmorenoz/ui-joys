import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {v4 as uuidv4} from "uuid";
import {ColorType} from "./form-types.ts";

@customElement('ui-radio-button')
export class RadioButton extends LitElement {

    /**
     * The id of the radio button
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the radio button
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The value of the radio button
     */
    @property({type: String})
    value = "";

    /**
     * The label to display
     */
    @property({type: String})
    label = "";

    /**
     * Whether the radio button is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    /**
     * Whether the radio button is required
     */
    @property({type: Boolean, attribute: "required"})
    required = false;

    /**
     * Whether the radio button is invalid
     */
    @property({type: Boolean, attribute: "invalid"})
    invalid = false;

    /**
     * Whether the radio button is valid
     */
    @property({type: Boolean, attribute: "valid"})
    valid = false;

    /**
     * The error message to display
     */
    @property({type: String, attribute: "error-message"})
    errorMessage = "";

    /**
     * Whether the radio button is checked
     */
    @property({type: Boolean, attribute: "checked"})
    checked = false;

    /**
     * If the alignment is right to left
     */
    @property({type: Boolean, attribute: "rtl"})
    rtl = false;

    /**
     * The color of the radio button
     */
    @property({type: String, attribute: "color"})
    color: ColorType = "default";

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
            <div class="ui-radio-button-wrapper ${this.rtl ? "rtl" : ""}">
                <input class="ui-radio-button-control ${this.checked ? "checked" : ""} 
                   color-${this.color}"
                       id="${this.elementId}" name="${this.elementName}" type="radio"
                       .value="${this.value}" ?checked="${this.checked}" ?disabled="${this.disabled}"
                       ?required="${this.required}" @input="${this.handleInput}">
                ${this.label ? html`
                    <label class="ui-radio-button-label ${this.disabled ? "disabled" : ""}"
                           for="${this.elementId}">${this.label}</label>` : null}
            </div>
            <div class="ui-radio-button-hint-container">
                <ui-input-hint-text text="${this.leftHint}"></ui-input-hint-text>
                <ui-input-hint-text text="${this.rightHint}"></ui-input-hint-text>
            </div>
        `;
    }

    handleInput(event: Event) {
        event.stopPropagation();
        this.checked = (event.target as HTMLInputElement).checked;
        this.dispatchEvent(new CustomEvent('checked', {
            bubbles: true,
            composed: true,
        }));
    }

    static styles = css`
        .ui-radio-button-hint-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-1);
            margin-top: var(--spacing-1);
        }

        .ui-radio-button-wrapper {
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
            width: fit-content;

            &.rtl {
                flex-direction: row-reverse;
            }
        }

        .ui-radio-button-label {
            display: block;
            font-family: inherit;
            font-size: var(--font-size-base);
        }

        .ui-radio-button-control {
            appearance: none;
            margin: 0;
            width: 18px;
            height: 18px;
            border: 2px solid var(--gray-500);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;

            &:checked {
                &::after {
                    content: "";
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: var(--gray-500);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed !important;
            }

            &.color-primary {
                border-color: var(--primary-500);

                &:checked {
                    &::after {
                        background-color: var(--primary-500);
                    }
                }
            }

            &.color-secondary {
                border-color: var(--secondary-500);

                &:checked {
                    &::after {
                        background-color: var(--secondary-500);
                    }
                }
            }

            &.color-success {
                border-color: var(--success-500);

                &:checked {
                    &::after {
                        background-color: var(--success-500);
                    }
                }
            }

            &.color-danger {
                border-color: var(--error-500);

                &:checked {
                    &::after {
                        background-color: var(--error-500);
                    }
                }
            }

            &.color-warning {
                border-color: var(--warning-500);

                &:checked {
                    &::after {
                        background-color: var(--warning-500);
                    }
                }
            }

            &.color-info {
                border-color: var(--info-500);

                &:checked {
                    &::after {
                        background-color: var(--info-500);
                    }
                }
            }
        }

        .ui-radio-button-label.disabled {
            opacity: 0.5;
            cursor: not-allowed !important;
        }

        @media (prefers-color-scheme: dark) {
            .ui-radio-button-control {
                border-color: var(--alpha-white-70);
                background-color: var(--alpha-black-80);

                &:checked {
                    &::after {
                        background-color: var(--alpha-white-70);
                    }
                }

                &.color-primary {
                    border-color: var(--primary-500);

                    &:checked {
                        &::after {
                            background-color: var(--primary-500);
                        }
                    }
                }

                &.color-secondary {
                    border-color: var(--secondary-500);

                    &:checked {
                        &::after {
                            background-color: var(--secondary-500);
                        }
                    }
                }

                &.color-success {
                    border-color: var(--success-500);

                    &:checked {
                        &::after {
                            background-color: var(--success-500);
                        }
                    }
                }

                &.color-danger {
                    border-color: var(--error-500);

                    &:checked {
                        &::after {
                            background-color: var(--error-500);
                        }
                    }
                }

                &.color-warning {
                    border-color: var(--warning-500);

                    &:checked {
                        &::after {
                            background-color: var(--warning-500);
                        }
                    }
                }

                &.color-info {
                    border-color: var(--info-500);

                    &:checked {
                        &::after {
                            background-color: var(--info-500);
                        }
                    }
                }
            }
        }
    `;
}