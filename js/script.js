// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-3-04-Fahrenheit-to-Celsius/sw.js", {
    scope: "/ICS2O-3-04-Fahrenheit-to-Celsius/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  // process
  const math = ((fahrenheit - 32) * 5) / 9
  // output
  document.getElementById("math").innerHTML = "Celsius: " + math + " C°"
}
