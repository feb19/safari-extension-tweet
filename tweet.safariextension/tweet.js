
safari.application.addEventListener('command', function(event) {
  if (event.command !== 'tweet') {
    return;
  }
  console.log(event)
  const url = event.target.browserWindow.activeTab.url
  const title = event.target.browserWindow.activeTab.title
  console.log(event.target.browserWindow.activeTab.url)
  const shareUrl = 'https://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title)

  safari.application.openBrowserWindow();
  safari.application.activeBrowserWindow.activeTab.url = shareUrl
}, false)
