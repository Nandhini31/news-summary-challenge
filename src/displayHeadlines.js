(function(exports){

  function parseHeadlines(){
    this.HeadlinesList = []
    }

    parseHeadlines.prototype.renderHeadlines = function(responseJSON){
      console.log(responseJSON)
      results = responseJSON.response.results;
      console.log(results)
      for(i=0;i<results.length;i++){
        // exports.document.getElementById('app').innerHTML += results[i].webTitle;
        this.HeadlinesList.push(results[i].webTitle);
      }
        // console.log(this.HeadlinesList)
        this.viewHeadlines(this.HeadlinesList);

    };

    parseHeadlines.prototype.viewHeadlines = function(headlineArray){
        var string = "<ul>"
        console.log("testing function calling")
        console.log(headlineArray)
        headlineArray.forEach(function(headline){
          string+="<li>"+ headline + "</li>";
        });
        string+="</ul>"
        exports.document.getElementById('app').innerHTML = string


      };

   exports.parseHeadlines = parseHeadlines;
 })(this);
