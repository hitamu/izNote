'use strict';
var izNo = angular.module('izNo', ['monospaced.elastic']);

function save(text, url) {
  var scope = angular.element(document.getElementById("izNote")).scope();
  scope.$apply(function () {
      scope.save(text, url);
  });
}