var clipboard = new Clipboard('#blackButton');

  clipboard.on('success', function(e) {
    console.log(e);
  });
  
  clipboard.on('error', function(e) {
    console.log(e);
  });
