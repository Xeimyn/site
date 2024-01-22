// store.js
import { writable } from "svelte/store";

// Create a writable store for showContent
export var isAuthenticated = writable(false)
export var passwordStore = writable("")