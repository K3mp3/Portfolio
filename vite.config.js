/* eslint-disable no-undef */
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Portfolio",

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                resume: resolve(__dirname, "Portfolio/myresume.html"),
                projects: resolve(__dirname, "Portfolio/myprojects.html"),
            }
        }
    }
});