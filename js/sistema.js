/* Sistema JS per generare eos paper wallet v1 */
var eos = eosjs_ecc
function inizializza(){
  // Create a new random private key
  eos.randomKey().then(privateWif =>  {
    let publicKey = eos.privateToPublic(privateWif)
    document.getElementById("publicKey").textContent = publicKey;
    document.getElementById("privateKey").textContent = privateWif;
    // Sostituisci testi
    document.getElementById("IndirizzoPubblico_testo").innerHTML = publicKey;
    document.getElementById("ChiavePrivata_testo").innerHTML = privateWif;
    // Genera QR delle chiavi
    var IndirizzoPubblico_qr = document.getElementById("IndirizzoPubblico_qr");
    IndirizzoPubblico_qr.innerHTML="";
    var ChiavePrivata_qr = document.getElementById("ChiavePrivata_qr");
    ChiavePrivata_qr.innerHTML="";
    //Genera codici QR
    new QRCode(IndirizzoPubblico_qr,{
        text:publicKey,
        width:100,
        height:100
    });
    new QRCode(ChiavePrivata_qr,{
        text:privateWif,
        width:100,
        height:100
    });
    $('#checkboxNascondiChiavePrivata').attr('checked', false); 
    // Nascondi private key
    $(document).ready(function () {
          $('#checkboxNascondiChiavePrivata').change(function () {
              if (!this.checked) {
              document.getElementById("ChiavePrivata_testo").innerHTML = privateWif;
              }
              else {
              document.getElementById("ChiavePrivata_testo").innerHTML = "HIDDEN FOR SECURITY";
              }
          });
      });
    //
  })
}
inizializza()


