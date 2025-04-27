// renderer.js
// Minimal script: focus webview on load
window.addEventListener('DOMContentLoaded', () => {
    const chatView = document.getElementById('webview');
    chatView.addEventListener('dom-ready', () => chatView.focus());
  });
  