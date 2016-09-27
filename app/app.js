var toDoApp = angular.module('toDoApp',['ngAnimate']);


toDoApp.controller('toDoController', ['$scope', function($scope){

    $scope.removeNote = function(note){
        var removedNote = $scope.notes.indexOf(note);
        $scope.notes.splice(removedNote,1); 
        
  //      $('.description').fadeOut();
        
    };
    
    $scope.addNote=function(){
    
   
        $scope.notes.push({
            name: $scope.newnote.name,
            description: $scope.newnote.description
        });
       
         
        
        $scope.newnote.name="";
        $scope.newnote.description="";
        
               
    };
    
    $scope.notes = [
    
        {
            name: "example",
            description: "description of the note"
        },
        {
            name: "example2",
            description: "description of the note"
        }
    
    ];
    
}]);