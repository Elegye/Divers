// ==UserScript==
// @name         Autossimo
// @namespace    https://www.24hautomotive.fr/
// @version      0.1
// @description  Bloque l'accès aux prix et à la commande de pièces sur l'outil Autossimo
// @author       Alexandre Halopé
// @match        http://www3.autossimo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Blocage total de l'accès aux pièces Autossimo
    var anchors = document.querySelectorAll("tr > td.name > a");
    console.log(anchors);
    anchors.forEach(function(anchor){
        anchor.removeAttribute("onclick");
    });

    var catalogues = document.querySelectorAll("tr > td.catalogue-link > a");
    console.log(catalogues);
    catalogues.forEach(function(catalogue){
        catalogue.removeAttribute("onclick");
    });

    var prices = document.querySelectorAll("span.net-price-rate-ht");
    console.log(prices);
    prices.forEach(function(price){
        price.textContent = "";
    });

    var titles = document.querySelectorAll("span.title-rate");
    titles.forEach(function(title){
        title.textContent = "";
    });

    var carts = document.querySelectorAll("a.product-btn.add-cart-btn.add-cart-piece");
    carts.forEach(function(cart){
        cart.classList.add("disabled");
        cart.style.pointerEvents = "none";
    });
})();
