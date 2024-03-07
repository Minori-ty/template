const port = window.chrome.runtime.connect({ name: 'worker' })
console.log('script')

port.onMessage.addListener(function (msg) {
  console.log(msg)
})
