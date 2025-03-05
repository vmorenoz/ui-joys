import {customElement, property, state} from "lit/decorators.js";
import {css, html, LitElement, PropertyValues} from "lit";
import {v4 as uuidv4} from "uuid";

@customElement("ui-select")
export class UiSelect extends LitElement {
    /**
     * The id of the select
     */
    @property({type: String})
    elementId = uuidv4();

    /**
     * The name of the select
     */
    @property({type: String})
    elementName = uuidv4();

    /**
     * The label to display
     */
    @property({type: String, attribute: "label"})
    label = "";

    /**
     * The selected value
     */
    @property({type: String, reflect: true})
    value = "";

    /**
     * The placeholder of the select
     */
    @property({type: String})
    placeholder = "Seleccionar";

    /**
     * Whether the select is disabled
     */
    @property({type: Boolean, attribute: "disabled"})
    disabled = false;

    /**
     * Whether the select is required
     */
    @property({type: Boolean, attribute: "required"})
    required = false;

    /**
     * Whether the select is invalid
     */
    @property({type: Boolean, attribute: "invalid"})
    invalid = false;

    /**
     * Whether the select is valid
     */
    @property({type: Boolean, attribute: "valid"})
    valid = false;

    /**
     * The left hint to display
     */
    @property({type: String, attribute: "left-hint"})
    leftHint = "";

    /**
     * The right hint to display
     */
    @property({type: String, attribute: "right-hint"})
    rightHint = "";

    /**
     * Stores the options from the slot
     */
    @state()
    options: Array<{ value: string; label: string }> = [];

    /**
     * Whether the dropdown is open
     */
    @state()
    private isOpen = false;

    /**
     * The selected item
     */
    @state()
    private selectedItem: { value: string; label: string } | null = null;

    /**
     * Returns the slotted children
     */
    get _slottedChildren() {
        const slot = this.shadowRoot?.querySelector('slot');
        return slot?.assignedElements({flatten: true}) || [];
    }

    async firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        await import("./ui-select-option.ts")
        await import("./ui-input-label.ts")
        await import("./ui-icon.ts")
        await import("./ui-hint-text.ts")
    }

    updated(changedProperties: any) {
        if (changedProperties.has('value')) {
            this.extractOptions();
        }
    }

    private extractOptions() {
        const assignedNodes = this._slottedChildren;
        this.options = assignedNodes
            .filter((el) => el.tagName.toLowerCase() === "ui-select-option")
            .filter((el) => !el.hasAttribute("disabled"))
            .map((option) => {
                const value = option.getAttribute("value") || "";
                const label = option.textContent || "";

                if (this.value === value) {
                    this.selectOption(value, label, false);
                }

                option.addEventListener("click", () => {
                    this.selectOption(value, label);
                });

                return {value, label}
            });
    }

    private toggleDropdown() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }

    private selectOption(value: string, label: string, emitChange = true) {
        this.value = value;
        this.selectedItem = {value, label};
        this.isOpen = false;
        if (!emitChange) return;
        this.dispatchEvent(
            new CustomEvent("on-select", {
                detail: {value: this.value},
                bubbles: true,
                composed: true,
            })
        );
    }

    render() {
        return html`
            <div class="ui-select">
                <ui-input-label text="${this.label}" ?required="${this.required}"></ui-input-label>
                <div class="ui-select-wrapper ${this.isOpen ? "open" : ""} ${this.invalid ? "invalid" : ""} ${this.valid ? "valid" : ""}"
                     ?disabled="${this.disabled}"
                     @click="${this.toggleDropdown}">
                    <span class="ui-select-value">${this.selectedItem?.label || this.placeholder}</span>
                    <ui-icon name="${this.isOpen ? "nav-arrow-up" : "nav-arrow-down"}"></ui-icon>
                </div>
                <div class="ui-select-hint-container">
                    <ui-input-hint-text text="${this.leftHint}"></ui-input-hint-text>
                    <ui-input-hint-text text="${this.rightHint}"></ui-input-hint-text>
                </div>
                <div class="ui-select-dropdown ${this.isOpen ? "open" : ""}">
                    <slot @slotchange="${this.extractOptions}"></slot>
                </div>
            </div>
        `;
    }

    static styles = css`
        .ui-select {
            position: relative;
            display: flex;
            flex-direction: column;
            margin: 0 var(--spacing-2) var(--spacing-2) 0;
        }

        .ui-select-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--spacing-2);
            background: var(--gray-50);
            border-radius: var(--border-radius-sm);
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px 0 inset;

            &.open {
                background-color: var(--gray-100);
            }

            &[disabled] {
                background-color: var(--gray-200);
                cursor: not-allowed;
                color: var(--gray-500);
            }

            &.invalid {
                background-color: var(--error-50);
            }

            &.valid {
                background-color: var(--success-50);
            }
        }

        .ui-select-dropdown {
            position: absolute;
            display: none;
            flex-direction: column;
            gap: var(--spacing-1);
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            margin-top: var(--spacing-1);
            border: 1px solid var(--gray-200);
            border-radius: var(--border-radius-sm);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 10;

            &.open {
                display: flex;
            }
        }

        .ui-select-hint-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--spacing-1);
            margin-top: var(--spacing-1);
        }

        ::slotted(ui-select-option) {
            cursor: pointer;
            transition: background 0.1s ease-in-out;
            padding: var(--spacing-2);
            font-size: var(--font-size-base);
        }

        ::slotted(ui-select-option:hover) {
            background: var(--gray-50);
        }

        ::slotted(ui-select-option[disabled]) {
            cursor: not-allowed;
            opacity: 0.5;
        }
        
        @media (prefers-color-scheme: dark) {
            .ui-select-wrapper {
                background-color: var(--alpha-black-50);
                color: var(--white);
                
                &.open {
                    background-color: var(--alpha-black-80);
                }
                
                &[disabled] {
                    background-color: var(--alpha-black-30);
                    cursor: not-allowed;
                }
            }
            
            .ui-select-dropdown {
                background: var(--black);
                border: 1px solid var(--black);
            }

            .ui-select-wrapper:has(input:focus) {
                background-color: var(--alpha-black-80);
            }

            .ui-select-wrapper:has(input:disabled) {
                background-color: var(--alpha-black-30);
            }

            .ui-select-wrapper.invalid {
                background-color: var(--error-200);
            }

            .ui-select-wrapper.valid {
                background-color: var(--success-200);
            }
            
            ::slotted(ui-select-option) {
                color: var(--white);
            }

            ::slotted(ui-select-option:hover) {
                background: var(--alpha-white-30);
            }

            ::slotted(ui-select-option[disabled]) {
                color: var(--gray-500);
                opacity: 0.5;
            }
        }
    `;
}