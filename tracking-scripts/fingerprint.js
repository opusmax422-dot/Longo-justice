(function() {
  const fingerprint = {
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    screen: {
      width: screen.width,
      height: screen.height,
      colorDepth: screen.colorDepth
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    cookiesEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    referrer: document.referrer,
    plugins: Array.from(navigator.plugins).map(p => p.name)
  };
  
  // Send to webhook
  fetch('https://webhook.site/31024e4b-cfea-43ed-a656-f006127071a8', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(fingerprint)
  }).catch(() => {}); // Silent fail
})();
