var assert = {
  isTrue: function(assertionToCheck){
    if(!assertionToCheck){
      throw new Error("Test Failed");
    }
    else{
      console.log("Test Passed")
    }

  }
};
