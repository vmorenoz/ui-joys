import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {v4 as uuidv4} from "uuid";
import {ColorType} from "./form-types.ts";

@customElement('ui-checkbox')
export class Checkbox extends LitElement {

    /**
     * The id of the checkbox
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the checkbox
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The value of the checkbox
     */
    @property({type: String})
    value = "";

    /**
     * The label to display
     */
    @property({type: String})
    label = "";

    /**
     * Whether the checkbox is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    /**
     * Whether the checkbox is required
     */
    @property({type: Boolean, attribute: "required"})
    required = false;

    /**
     * Whether the checkbox is indeterminate
     */
    @property({type: Boolean, attribute: "indeterminate"})
    indeterminate = false;

    /**
     * The error message to display
     */
    @property({type: String, attribute: "error-message"})
    errorMessage = "";

    /**
     * Whether the checkbox is checked
     */
    @property({type: Boolean, attribute: "checked"})
    checked = false;

    /**
     * If the alignment is right to left
     */
    @property({type: Boolean, attribute: "rtl"})
    rtl = false;

    /**
     * The color of the checkbox
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
            <div class="ui-checkbox-wrapper ${this.rtl ? "rtl" : ""}">
                <input class="ui-checkbox-control ${this.checked ? "checked" : ""} 
                   color-${this.color}"
                       id="${this.elementId}" name="${this.elementName}" type="checkbox"
                       .value="${this.value}" ?checked="${this.checked}" ?disabled="${this.disabled}"
                       ?indeterminate="${this.indeterminate}"
                       @input="${this.handleInput}">

                <ui-icon class="ui-checkbox-icon color-${this.color} ${this.checked ? "visible" : ""}"
                         name="${this.indeterminate ? "minus" : "check"}"></ui-icon>
                ${this.label ? html`
                    <label class="ui-checkbox-label ${this.disabled ? "disabled" : ""}"
                           for="${this.elementId}">${this.label}</label>` : null}
            </div>
            <div class="ui-checkbox-hint-container">
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
        .ui-checkbox-hint-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-1);
            padding: 0 var(--spacing-1);
        }

        .ui-checkbox-wrapper {
            display: flex;
            align-items: center;
            gap: var(--spacing-1);
            width: fit-content;

            &.rtl {
                flex-direction: row-reverse;
            }
        }

        .ui-checkbox-label {
            display: block;
            font-family: inherit;
            font-size: var(--font-size-base);

            &.disabled {
                opacity: 0.5;
                cursor: not-allowed !important;
            }
        }

        .ui-checkbox-control {
            appearance: none;
            margin: 0;
            width: 18px;
            height: 18px;
            border: 2px solid var(--gray-500);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed !important;
            }

            &:checked {
                background-color: var(--gray-100);
            }

            &.color-primary {
                border-color: var(--primary-500);

                &:checked {
                    background-color: var(--primary-50);
                }
            }

            &.color-secondary {
                border-color: var(--secondary-500);

                &:checked {
                    background-color: var(--secondary-50);
                }
            }

            &.color-success {
                border-color: var(--success-500);

                &:checked {
                    background-color: var(--success-50);
                }
            }

            &.color-danger {
                border-color: var(--error-500);

                &:checked {
                    background-color: var(--error-50);
                }
            }

            &.color-warning {
                border-color: var(--warning-500);

                &:checked {
                    background-color: var(--warning-50);
                }
            }

            &.color-info {
                border-color: var(--info-500);

                &:checked {
                    background-color: var(--info-50);
                }
            }
        }

        .ui-checkbox-icon {
            position: absolute;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            font-size: var(--font-size-lg);

            &.visible {
                opacity: 1;
            }

            &.color-primary {
                color: var(--primary-500);
            }

            &.color-secondary {
                color: var(--secondary-500);
            }

            &.color-success {
                color: var(--success-500);
            }

            &.color-danger {
                color: var(--error-500);
            }

            &.color-warning {
                color: var(--warning-500);
            }

            &.color-info {
                color: var(--info-500);
            }
        }

        @media (prefers-color-scheme: dark) {
            .ui-checkbox-control {
                border-color: var(--alpha-white-70);
                background-color: var(--alpha-black-50);

                &:checked {
                    background-color: var(--alpha-black-80);
                }

                &:disabled {
                    background-color: var(--alpha-black-30);
                }

                &.color-primary {
                    border-color: var(--primary-500);

                    &:checked {
                        background-color: var(--primary-400);
                    }
                }

                &.color-secondary {
                    border-color: var(--secondary-500);

                    &:checked {
                        background-color: var(--secondary-400);
                    }
                }

                &.color-success {
                    border-color: var(--success-500);

                    &:checked {
                        background-color: var(--success-400);
                    }
                }

                &.color-danger {
                    border-color: var(--error-500);

                    &:checked {
                        background-color: var(--error-400);
                    }
                }

                &.color-warning {
                    border-color: var(--warning-500);

                    &:checked {
                        background-color: var(--warning-500);
                    }
                }

                &.color-info {
                    border-color: var(--info-500);

                    &:checked {
                        background-color: var(--info-400);
                    }
                }
            }

            .ui-checkbox-icon {
                color: var(--white);

                &.color-primary {
                    color: var(--primary-50);
                }

                &.color-secondary {
                    color: var(--secondary-50);
                }

                &.color-success {
                    color: var(--success-50);
                }

                &.color-danger {
                    color: var(--error-50);
                }

                &.color-warning {
                    color: var(--warning-50);
                }

                &.color-info {
                    color: var(--info-50);
                }
            }
        }
    `;
}