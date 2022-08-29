Quagga.init(
  {
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector("#camera"), // Or '#yourElement' (optional)
    },
    decoder: {
        readers: [{
            format: "ean_reader",
            config: {
                supplements: [
                    'ean_5_reader', 'ean_2_reader'
                ]
            }
        }]
    },
  },
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
  }
);

Quagga.onDetected(function(data){
    document.querySelector("#resultado").innerHTML = data.codeResult.code;
})
