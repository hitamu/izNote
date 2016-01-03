'use strict';
izNo.controller('NoteCtrl', function($scope, Storage){

	$scope.selected = {};
	$scope.notes = [];
	$scope.emptyNote = {
		title: "",
		content: "",
		created: new Date().getTime()
	};

	$scope.$watch('Storage.data', function() {
		$scope.notes = Storage.data;
	});

	Storage.load(function(data){
		$scope.notes = data;
	});
	
	$scope.add = function() {
		$scope.notes.unshift(angular.copy($scope.emptyNote));
		$scope.query = "";
		$scope.show(0);
	};

	$scope.save = function(text, url) {
		var note = angular.copy($scope.emptyNote);
		note.title = "Quick save";
		note.content = text + "\n" + "From: " + decodeURIComponent(url);
		$scope.notes.unshift(note);
	};

	$scope.show = function(id) {
		$scope.selected = $scope.notes[id];
	};

	$scope.update = function(id) {
		$scope.selected.created = new Date().getTime();
		$scope.notes[id] = $scope.selected;
	};

	$scope.delete = function(id) {		
		$scope.notes.splice(id, 1);
		$scope.show(0);
	};

	$scope.search = function (row) {
	  return (angular.lowercase(row.title).indexOf($scope.query || '') !== -1 
	  	||  angular.lowercase(row.content).indexOf($scope.query || '') !== -1);
	};

	$scope.$watch("notes", function(data){
		Storage.sync();
	}, true);
})