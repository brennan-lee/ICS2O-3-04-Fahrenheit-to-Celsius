// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
 function calculate() {
  // input
  const r = parseInt(document.getElementById("radius").value)

  // process
  const math = (4.0 / 3.0) * Math.PI * Math.pow(r, 3)
  // output
  document.getElementById("math").innerHTML =
    "The volume is: " + math.toFixed(2) + " units³"
}
