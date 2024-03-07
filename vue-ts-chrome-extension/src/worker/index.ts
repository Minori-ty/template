chrome.runtime.onConnect.addListener(function (port) {
  setTimeout(() => {
    port.postMessage('下载完成')
  }, 1000)
  fetch('/about')
})
console.log('worker')
