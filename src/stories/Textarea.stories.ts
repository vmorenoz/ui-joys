import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";

import "./styles.css";

interface TextareaProps {
    elementId: string;
    elementName: string;
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
    input: (event: Event) => void;
    change: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    copy: (event: Event) => void;
    cut: (event: Event) => void;
    paste: (event: Event) => void;
}

const meta = {
    component: "ui-textarea",
    title: 'Components/Textarea',
    loaders: async () => {
        return await import("../lib/components/ui-textarea.ts");
    },
    render: (args) => {
        return html`
            <ui-textarea
                    elementId="${args.elementId}"
                    elementName="${args.elementName}"
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
                    @input="${args.input}"
                    @change="${args.change}"
                    @focus="${args.focus}"
                    @blur="${args.blur}"
                    @copy="${args.copy}"
                    @cut="${args.cut}"
                    @paste="${args.paste}"
            >
            </ui-textarea>`;
    },
    argTypes: {
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
            control: {
                type: 'text',
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
            control: {
                type: 'text',
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
        value: '',
        placeholder: '',
        disabled: false,
        required: false,
        readonly: false,
        invalid: false,
        valid: false,
        label: '',
        leftHint: '',
        rightHint: '',
        input: fn(),
        change: fn(),
        focus: fn(),
        blur: fn(),
        copy: fn(),
        cut: fn(),
        paste: fn(),
    },
} satisfies Meta<TextareaProps>;

export default meta;
type Story = StoryObj<TextareaProps>;

export const Playground: Story = {
    args: {
        elementId: 'primary',
        elementName: 'primary',
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
        input: fn(),
        change: fn(),
        focus: fn(),
        blur: fn(),
        copy: fn(),
        cut: fn(),
        paste: fn(),
    },
};