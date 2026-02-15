(function() {
  const legitimateDomains = [
    'nxffhryi.gensparkspace.com',
    'opusmax422-dot.github.io',
    'rvlongo-evidence.vercel.app',
    'localhost' // for testing
  ];
  
  const currentDomain = window.location.hostname;
  const isLegitimate = legitimateDomains.some(domain => currentDomain.includes(domain));
  
  if (!isLegitimate) {
    // Site is being served from unauthorized domain
    fetch('https://webhook.site/31024e4b-cfea-43ed-a656-f006127071a8', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        alert: 'CLONE_DETECTED',
        unauthorizedDomain: currentDomain,
        page: window.location.href,
        timestamp: new Date().toISOString(),
        referrer: document.referrer
      })
    });
  }
})();
