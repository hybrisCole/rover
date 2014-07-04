'use strict';

/**
 * @ngdoc function
 * @name roverAppApp.controller:AccesoriosCtrl
 * @description
 * # AccesoriosCtrl
 * Controller of the roverApp
 */
angular.module('roverApp')
  .controller('AccesoriosCtrl', function ($scope) {
    $scope.accesorios = [
      {
        nombre:'Sunshade',
        descripcion:'UV windscreen sunshade. <br /> Helps to keep the vehicle interior cool in hot weather.',
        referencia:'VPLFY0067'
      },
      {
        nombre:'Electric Cool Bag',
        descripcion:'This is powered by a 12 volt auxiliary socket and is thermostatically temperature controlled. <br /> Thermostatically controlled temperature. Easy clean interior surface. Height 15 inches, Length 15 inches, Width 9 inches, Volume 4 gallons.',
        referencia:'VUP100140L'
      },
      {
        nombre:'Sunshade',
        descripcion:'Carbon Fibre - Kit LH & RH <br /> Carbon Fibre Mirror Scalp for L538.',
        referencia:'VPLVB0145'
      },
      {
        nombre:'Rear Mudflaps',
        descripcion:'Enhance and protect your Range Rover Evoque and Coupe with rear mud flaps for pure and prestige models. <br /> Styled mud flaps reduce spray and help protect vehicle paintwork. <br /> Rear pair.',
        referencia:'VPLVP0069'
      },
      {
        nombre:'Loadspace Rails',
        descripcion:'Boot rail kit which uses loadspace lashing eye fixings. <br /> Luggage rails and sliding D-Loops kit.',
        referencia:'VPLVS0102'
      },
      {
        nombre:'Rear Spoiler Lip Upgrade - Coupe',
        descripcion:'Dynamic rear spoiler for Range Rover Evoque Coupé, 3 door.',
        referencia:'VPLVB0100'
      }
    ];
  });
