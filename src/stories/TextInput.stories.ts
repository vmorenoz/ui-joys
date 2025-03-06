import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";

import "./styles.css";

interface TextInputProps {
    elementId: string;
    elementName: string;
    type: 'text' | 'password' | 'number';
    value: string;
    placeholder: string;
    disabled: boolean;
    required: boolean;
    readonly: boolean;
    invalid: boolean;
    valid: boolean;
    label: string;
    leftHint: string;
    rightHint: string;
    leftIcon: string;
    rightIcon: string;
    prefix: string;
    suffix: string;
    input: (event: Event) => void;
    change: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    copy: (event: Event) => void;
    cut: (event: Event) => void;
    paste: (event: Event) => void;
}

const meta = {
    component: "ui-text-input",
    title: 'Components/Text Input',
    loaders: async () => {
        return await import("../lib/components/ui-text-input.ts");
    },
    render: (args) => {
        return html`
            <ui-text-input
                    elementId="${args.elementId}"
                    elementName="${args.elementName}"
                    type="${args.type}"
                    value="${args.value}"
                    placeholder="${args.placeholder}"
                    ?disabled="${args.disabled}"
                    ?required="${args.required}"
                    ?readonly="${args.readonly}"
                    ?invalid="${args.invalid}"
                    ?valid="${args.valid}"
                    label="${args.label}"
                    left-hint="${args.leftHint}"
                    right-hint="${args.rightHint}"
                    left-icon="${args.leftIcon}"
                    right-icon="${args.rightIcon}"
                    prefix="${args.prefix}"
                    suffix="${args.suffix}"
                    @input="${args.input}"
                    @change="${args.change}"
                    @focus="${args.focus}"
                    @blur="${args.blur}"
                    @copy="${args.copy}"
                    @cut="${args.cut}"
                    @paste="${args.paste}"
            >
            </ui-text-input>`;
    },
    argTypes: {
        type: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: 'text',
                },
                type: {
                    summary: 'text | password | number',
                },
            },
            options: ['text', 'password', 'number'],
            control: {
                type: "select",
                labels: {
                    text: 'Text',
                    password: 'Password',
                    number: 'Number',
                },
            }
        },
        value: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        placeholder: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
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
        required: {
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
        readonly: {
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
        invalid: {
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
        valid: {
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
        label: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        prefix: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        suffix: {
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        leftHint: {
            name: 'left-hint',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
            },
        },
        rightHint: {
            name: 'right-hint',
            table: {
                category: 'Inputs',
                defaultValue: {
                    summary: '',
                },
                type: {
                    summary: 'string',
                },
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
        },
        input: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input value changes',
        },
        change: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input value changes',
        },
        focus: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input is focused',
        },
        blur: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input is blurred',
        },
        copy: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input is copied',
        },
        cut: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input is cut',
        },
        paste: {
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'Function',
                }
            },
            description: 'The function to call when the input is pasted',
        },
    },
    args: {
        type: 'text',
        value: '',
        placeholder: '',
        disabled: false,
        required: false,
        readonly: false,
        invalid: false,
        valid: false,
        label: '',
        prefix: '',
        suffix: '',
        leftHint: '',
        rightHint: '',
        leftIcon: '',
        rightIcon: '',
        input: fn(),
        change: fn(),
        focus: fn(),
        blur: fn(),
        copy: fn(),
        cut: fn(),
        paste: fn(),
    },
} satisfies Meta<TextInputProps>;

export default meta;
type Story = StoryObj<TextInputProps>;

export const Playground: Story = {
    args: {
        elementId: 'primary',
        elementName: 'primary',
        type: 'text',
        value: '',
        placeholder: '',
        disabled: false,
        required: false,
        readonly: false,
        invalid: false,
        valid: false,
        label: 'Label',
        leftHint: '',
        rightHint: '',
        leftIcon: '',
        rightIcon: '',
        input: fn(),
        change: fn(),
        focus: fn(),
        blur: fn(),
        copy: fn(),
        cut: fn(),
        paste: fn(),
    },
};