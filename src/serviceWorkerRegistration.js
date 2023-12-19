// serviceWorkerRegistration.js

// Check if the browser supports service workers
export const isServiceWorkerSupported = 'serviceWorker' in navigator;

// Register the service worker
export function register() {
    if (isServiceWorkerSupported) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/service-worker.js') // Path to your service worker file
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }
}

// Unregister the service worker
export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister()
                .then(() => {
                    console.log('Service Worker unregistered');
                })
                .catch(error => {
                    console.error('Service Worker unregistration failed:', error);
                });
        });
    }
}
