/**
 * ajouter la font voulu
 * @param  { Object }   FontName
 * @return { void } Nothing
 */
//
    function addGoogleFont(FontName) {
        const newLink = document.createElement('link');
        newLink.setAttribute('href','https://fonts.googleapis.com/css?family='+ FontName);
        newLink.setAttribute('rel','stylesheet');
        newLink.setAttribute('type','text/css');
        document.head.appendChild(newLink);
    }
    addGoogleFont("Pattaya");

   /**
 * ajouter le nombre de produit dans le panier sur la petite pastille à côté du panier
 * @return { void } Nothing
 */
//
    function addNumberToCart(){
        let teddyIds = ["5be9c8541c9d440000665243", "5beaa8bf1c9d440000a57d94", "5beaaa8f1c9d440000a57d95", "5beaabe91c9d440000a57d96", "5beaacd41c9d440000a57d97"];
        let teddiesQuantity = 0;
        for (let i = 0; i < teddyIds.length; i++) {
            if (localStorage.getItem('teddy_' + teddyIds[i])) {
                teddiesQuantity += parseInt(localStorage.getItem('teddy_' + teddyIds[i] + "_qte"));
            }
        }
        console.log(teddiesQuantity);
        let cartSpan = document.getElementsByClassName('badge')[0];
        cartSpan.innerText = teddiesQuantity;
    }
    addNumberToCart();
        