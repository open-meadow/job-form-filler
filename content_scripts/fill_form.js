browser.storage.local.get(['name', 'email'], function(data) {
  console.log(data.name, "FILL FOOOOORM!!!!");
  console.log(data.email, "FILL FOOOOORM!!!!");
})