(function(exports){

  function headlinesView(list){
    this.list = list;
    }
    parseHeadlines.prototype.headlinesHTML = function(){
      var string = "<ul>"
      this.list.forEach(headline){
        string+="<li>"+ headline + "</li>"
      }
      string+="</ul>"
      exports.document.getElementById('app').innerHTML = string
    };
   exports.headlinesView = headlinesView;
 })(this);
