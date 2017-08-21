
  var responseJSON;
  function Headlines(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        responseJSON = xhr.responseText;
        console.log(responseJSON);
      }
    }
    xhr.addEventListener('error', function(){
      console.log('error');
    });
    xhr.open("GET", "http://content.guardianapis.com/search?api-key=test",true)
    xhr.send();
  };
