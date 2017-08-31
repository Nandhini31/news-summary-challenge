(function(exports){
  var responseJSON;
  function Headlines(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4){
        // responseJSON = xhr.responseText;
        parsedjson = JSON.parse(xhr.responseText);
        new parseHeadlines().renderHeadlines(parsedjson);

      }
    }
    xhr.addEventListener('error', function(){
      console.log('error');
    });
    xhr.open("GET", "http://content.guardianapis.com/search?api-key=test",true)
    xhr.send();
  };
   exports.Headlines = Headlines;
 })(this);
