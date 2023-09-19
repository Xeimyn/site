// store.js
import { writable } from "svelte/store";

// Create a writable store for showContent
export const showContentStore = writable(false);
export const lightModeStore = writable(false);