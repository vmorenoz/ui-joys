import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";

import "./styles.css";

interface ButtonProps {
    elementId: string;
    elementName: string;
    type: string;
    text: string;
    disabled: boolean;
    loading: boolean;
    color: string;
    leftIcon: string;
    rightIcon: string;
    click: () => void;
}

const meta = {
    component: "ui-button",
    title: 'Components/Button',
    loaders: async () => {
        return await import("../lib/components/ui-button.ts");
    },
    render: (args) => {
        return html`
            <ui-button
                    elementId="${args.elementId}"
                    elementName="${args.elementName}"
                    type="${args.type}"
                    text="${args.text}"
                    ?disabled="${args.disabled}"
                    ?loading="${args.loading}"
                    color="${args.color}"
                    left-icon="${args.leftIcon}"
                    right-icon="${args.rightIcon}"
                    @click="${args.click}"
            >
            </ui-button>`;
    },
    argTypes: {
        type: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'button',
                },
                type: {
                    summary: 'button | submit | reset',
                },
            },
            options: ['button', 'submit', 'reset'],
            control: {
                type: 'radio',
                labels: {
                    button: 'Button',
                    submit: 'Submit',
                    reset: 'Reset',
                },
            },
        },
        color: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'default',
                },
                type: {
                    summary: 'default | primary | secondary | success | error | warning | info',
                },
            },
            options: ['default', 'primary', 'secondary', 'success', 'error', 'warning', 'info'],
            control: {
                type: "select",
                labels: {
                    default: 'Default',
                    primary: 'Primary',
                    secondary: 'Secondary',
                    success: 'Success',
                    error: 'Error',
                    warning: 'Warning',
                    info: 'Info',
                }
            }
        },
        text: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
            control: {
                type: 'text',
            },
        },
        disabled: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean',
                },
            },
            control: {
                type: 'boolean',
            },
        },
        loading: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'false',
                },
                type: {
                    summary: 'boolean',
                },
            },
            control: {
                type: 'boolean',
            },
        },
        leftIcon: {
            name: 'left-icon',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
            description: 'Icon from Iconoir to display on the left side of the button',
            control: {
                type: 'text',
            }
        },
        rightIcon: {
            name: 'right-icon',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
            control: {
                type: 'text',
            },
            description: 'Icon from Iconoir to display on the right side of the button',
        },
        elementId: {
            name: 'element-id',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'Random UUID',
                },
                type: {
                    summary: 'string',
                },
            },

            control: {
                type: 'text',
            },
        },
        elementName: {
            name: 'element-name',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'Random UUID',
                },
                type: {
                    summary: 'string',
                },
            },

            control: {
                type: 'text',
            },
        },
        click: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                },
                type: {
                    summary: 'Function',
                },
            },
            description: 'The function to call when the button is clicked',
        },
    },
    args: {
        type: 'button',
        text: 'Button',
        disabled: false,
        loading: false,
        color: "default",
        leftIcon: '',
        rightIcon: '',
        click: fn(),
    },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
    args: {
        elementId: 'primary',
        elementName: 'primary',
        type: 'button',
        text: 'Button',
        disabled: false,
        loading: false,
        color: "default",
        leftIcon: '',
        rightIcon: '',
        click: fn(),
    },
};
