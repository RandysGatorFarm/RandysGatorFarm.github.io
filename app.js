window.addEventListener('load', e => {
    new RandysPWA();
    registerSW(); 
  });

async function registerSW() { 
    if ('serviceWorker' in navigator) { 
    try {
        await navigator.serviceWorker.register('./sw.js'); 
    } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.'); 
    }
    } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
    }
}

self.addEventListener('install', async event => {
    console.log('install event')
});

self.addEventListener('fetch', async event => {
    console.log('fetch event')
});