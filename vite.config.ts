import { defineConfig, loadEnv } from 'vite'
import typescript from '@rollup/plugin-typescript';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        base: "./",
        plugins: [
            typescript({
                include: ["./src/**/*.ts", "./src/**/*.tsx"],
            })
        ],
        server: {
            host: '0.0.0.0',
        }
    }
})
