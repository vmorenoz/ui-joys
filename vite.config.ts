import {dirname, resolve} from 'path';
import {defineConfig} from 'vite';
import {fileURLToPath} from "node:url";
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: {
                "ui-joys": resolve(__dirname, 'src/lib/main.ts'),
                "ui-button": resolve(__dirname, 'src/lib/components/ui-button.ts'),
                "ui-checkbox": resolve(__dirname, 'src/lib/components/ui-checkbox.ts'),
                "ui-icon": resolve(__dirname, 'src/lib/components/ui-icon.ts'),
                "ui-input-label": resolve(__dirname, 'src/lib/components/ui-input-label.ts'),
                "ui-radio-button": resolve(__dirname, 'src/lib/components/ui-radio-button.ts'),
                "ui-select": resolve(__dirname, 'src/lib/components/ui-select.ts'),
                "ui-text-input": resolve(__dirname, 'src/lib/components/ui-text-input.ts'),
                "ui-textarea": resolve(__dirname, 'src/lib/components/ui-textarea.ts'),
            },
            fileName: (format, entryName) => `${entryName}.${format}.js`,
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['iconoir', 'lit', 'uuid'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    lit: 'Lit',
                    iconoir: 'Iconoir',
                    uuid: 'uuid',
                },
            },
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            outDir: "dist/types",
        }),
    ],
})