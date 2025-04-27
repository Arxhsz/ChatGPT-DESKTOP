// preload.js (unchanged)
const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('api', {});