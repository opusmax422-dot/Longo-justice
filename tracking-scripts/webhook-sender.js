function sendTrackingData(eventType, data) {
  const payload = {
    event: eventType,
    timestamp: new Date().toISOString(),
    page: window.location.href,
    ...data
  };
  
  fetch('https://webhook.site/31024e4b-cfea-43ed-a656-f006127071a8', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }).catch(() => {});
}

// Track page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    sendTrackingData('PAGE_HIDDEN', {});
  } else {
    sendTrackingData('PAGE_VISIBLE', {});
  }
});
