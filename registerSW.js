if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vite-deploy/sw.js', { scope: '/vite-deploy/' })})}