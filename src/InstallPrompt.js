import React, { useEffect, useState } from 'react';

function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the installation prompt');
                } else {
                    console.log('User dismissed the installation prompt');
                }
            });
        }
    };

    return (
        <button onClick={handleInstallClick} style={{ display: deferredPrompt ? 'block' : 'none' }}>
            Install App
        </button>
    );
}

export default InstallPrompt;
