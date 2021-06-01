(function() {
  const product = JSON.parse(
    new URLSearchParams(window.location.search).get("answer")
  );
  const table = JSON.parse(
    new URLSearchParams(window.location.search).get("productTableHtml")
  );
  console.log(document.body.innerHTML);
document.body.innerHTML += `
            <div class="">
                <div class="div-body">
                    <h3 class="div-title text-center">
                        Merci, 
                        <span class="bold add">${" "+product.contact.firstName+" "}${product.contact.lastName+" "}</span>
                    </h3>
                    <p class="div-text text-center">
                        Félicitations pour votre commande sur notre site OriBears
                    </p>
                    <p class="div-subtitle text-center" id="subtitle1">
                        Votre commande numéro 
                        <span class="bold add">
                        ${" "+product.orderId+" "}
                        </span> 
                        est validée
                    </p>
                    <p class="div-subtitle text-center" id="subtitle2">
                        Nous préparons votre commande.
                    </p>
                </div>
                <section class="div-section col-md-12">
                    <div class="div1-body col-md-12">
                        <h2 class="div1-title2 text-center col-md-12 bold">
                            les détails de la commande
                        </h2>
                    </div>
                    <div class="div1-body  block-center col-md-6 card">
                         <h3 class="div1-subtitle2 text-center bold">
                            Mode de paiement
                        </h3>
                        <p class="div1-text1  text-center">
                            Carte Bancaire
                        </p>
                    </div>
                    <div class="div1-body block-center col-md-6 card">
                        <h3 class="div2-subtitle3 text-center bold">
                            Adresse de livraison
                        </h3>
                        <p class="div2-text2 bold text-center add">
                            ${product.contact.address + ", " + product.contact.city}
                        </p>
                    </div>
                </section>
                <table class="col-md-12 divTable">
                </table>
                <div class="col-md-12">
                    <h2 class="textcenter bold">
                        Total de la commande
                    </h2>
                    <table class="mAuto">
                        <thead class="title">
                            <tr class="">
                                <th class="textcenter" scope="col">
                                    Prix total des produits
                                </th>
                                <th class="textcenter" scope="col">
                                    Prix de la livraison
                                </th>
                                <th class="textcenter" scope="col">
                                    Taxes
                                </th>
                                <th class="textcenter" scope="col">
                                    Total de la commande
                                </th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr class="">
                                <td class="text-center" id="totalPrice">
                                    o
                                </td>
                                <td class="text-center">
                                    offerte
                                </td>
                                <td class="text-center">
                                    10%
                                </td>
                                <td class="text-center" id="truePrice">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <section class="div-section col-md-12">
                        <p class="text-center">
                            Retrouvez ces informations dans votre boîte mail<span class="bold add">${" "+product.contact.email+" "}</span>ainsi que votre facture.
                        </p>
                        <p class="text-center">
                            Merci pour votre confiance, nous restons à votre écoute pour tout complément d’informations.
                        </p>
                        <h3 class="text-center" id="message">
                            Vous disposez d’un délai de 14 jours à partir de la réception des produits pour exercer votre droit de rétractation.
                        </h3>
                    </section>
                </div>
                <footer class="col-md-12 block-center footer mt-auto py-3">
                    <div class="text-center">
                        Orinoco - 249 avenue du Président Wilson 93210 La Plaine Saint Denis
                    </div>
                </footer>
            </div>
                        `;


  document.getElementsByClassName("divTable")[0].innerHTML = table;
  let price= document.getElementsByClassName("totalPrice")[0].innerText;
  document.getElementById('totalPrice').innerHTML = price;
  let priceWithoutEuros = parseInt(price.slice(0, -1));
  let truePrice = document.getElementById('truePrice').innerHTML = priceWithoutEuros + priceWithoutEuros / 10+"€"       


  let particularKey = "";
  let key;
  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    if (key != particularKey) {
      localStorage.removeItem(key);
      localStorage.removeItem(key + "_qte");
    }
  }
  indexRedirect();
})();  
  // indexRedirect()
function indexRedirect() {
    const delay = 5000; // time in milliseconds
  
    // Display message
    document.getElementsByTagName("section").outerHTML = "";
    $(document.createElement("div"))
      .text("À très bientôt sur OriBears !")
      .appendTo("body");
    setTimeout(function () {
      document.location.href = "./index.html";
    }, delay);
  }
