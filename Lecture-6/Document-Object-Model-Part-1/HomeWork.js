document.body.childNodes;


/*

Output :-  NodeList(8) [text, div, text, h3, text, p, text, script]

*/





document.body.childNode;

/*

Output :-  

NodeList(13)
         0: text
         1: div
         2: text
         3: h3
         4: text
         5: p
         6: text
         7: script
         8: text
         9: comment
         10: text
         11: script
         12: text
         length: 13
         [[Prototype]]: NodeList

*/




document.body.firstChild;

/*

Output :-   #text

*/





document.body.lastChild;

/*

Output :-  #text

*/




document.querySelector("body").childNodes;


/*

Output :- 

NodeList(13) [text, div, text, h3, text, p, text, script, text, comment, text, script, text]
                                                                            0: text  
                                                                            1: div  
                                                                            2: text  
                                                                            3: h3  
                                                                            4: text  
                                                                            5: p  
                                                                            6: text  
                                                                            7: script  
                                                                            8: text  
                                                                            9: comment  
                                                                            10: text  
                                                                            11: script  
                                                                            12: text  
                                                                            length: 13  

*/




document.querySelector("body").firstElementChild;

/*

Output :-  

      <div> 
        This is a  div container 
         <div> This is a  div container 2 </div> 
         <h1> This is H1 Heading 1  </h1>
         <h2> This is H2 Heading 2  </h2>
      </div>

*/





document.querySelector("body").lastElementChild;

/*

Output :- 


<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>


*/




document.querySelector("body").children;

/*

Output :- 

HTMLCollection(5) [div, h3, p, script, script]
                                 0: div  
                                 1: h3  
                                 2: p  
                                 3: script  
                                 4: script  
                                 length: 5  
                                 [[Prototype]]: HTMLCollection

*/




document.querySelector("body").children[0];

/*

Output :- 

      <div> 
        This is a  div container 
         <div> This is a  div container 2 </div> 
         <h1> This is H1 Heading 1  </h1>
         <h2> This is H2 Heading 2  </h2>
      </div>

*/




document.querySelector("body").children[1];

/*

Output :-    <h3> This is H3 Heading 3 </h3>

*/





document.querySelector("body").children[2];

/*

Output :-   
      
     <p> Hi this file is to demonstrate how to access the childNodes firstChild , LastChild , children , children[0] , children[1]......etc , firstElementChild and lastElementChild </p>

*/




document.querySelector("body").children[3];

/*

Output :-   <script src="HomeWork.js"></script>

*/





document.querySelector("div").firstChild;

/*

// Output :-  " This is a  div container "

*/






document.querySelector("div").lastChild;

/*

// Output :-  #text

*/





document.querySelector("div").firstElementChild;

/*

// Output :-  <div> This is a  div container 2 </div>

*/





document.querySelector("div").lastElementChild;

/*

// Output :-   <h2> This is H2 Heading 2  </h2>

*/





console.log(document.querySelector("div").childNodes)

/*

Output :-  

NodeList(7)

        0: text
        1: div
        2: text
        3: h1
        4: text
        5: h2
        6: text  
        length: 7
        [[Prototype]]: NodeList

*/





document.querySelector("div").children;

/*

Output :- 

HTMLCollection(3) [div, h1, h2]
                0: div
                1: h1
                2: h2
                length: 3
                [[Prototype]]: HTMLCollection

*/




document.querySelector("div").children[0];

/*

Output :-   <div> This is a  div container 2 </div>

*/





document.querySelector("div").children[1];

/*

Output :-  <h1> This is H1 Heading 1  </h1>

*/





document.querySelector("div").children[2];

/*

Output :-   <h2> This is H2 Heading 2  </h2>

*/




document.querySelector("h1").firstChild;

/*

Output :-    "  This is H1 Heading 1  "

*/





document.querySelector("h1").lastChild;

/*

Output :-    "  This is H1 Heading 1  "

*/





document.querySelector("h1").firstElementChild;

/*

Output :-  null

*/




document.querySelector("h1").lastElementChild;

/*

Output :-  null

*/





document.querySelector("h1").childNodes;

/*

Output :- 

NodeList [text]
           0: text
           length: 1
           [[Prototype]]: NodeList

*/





document.querySelector("h1").children;

/*

Output :-    HTMLCollection []

*/





document.querySelector("h2").firstChild;

/*

Output :-    "  This is H2 Heading 2  "

*/




document.querySelector("h2").lastChild;

/*

Output :-    "  This is H2 Heading 2  "

*/




document.querySelector("h2").firstElementChild;


/*

Output :-  null

*/




document.querySelector("h2").lastElementChild;

/*

Output :-  null

*/





document.querySelector("h2").childNodes;


/*

Output :- 

NodeList [text]
           0: text
           length: 1
           [[Prototype]]: NodeList

*/




document.querySelector("h2").children;


/*

Output :-    HTMLCollection []

*/





document.querySelector("h3").firstChild;

/*

Output :-    "  This is H3 Heading 3  "

*/




document.querySelector("h3").lastChild;

/*

Output :-    "  This is H3 Heading 3  "

*/




document.querySelector("h3").firstElementChild;


/*

Output :-  null

*/




document.querySelector("h3").lastElementChild;

/*

Output :-  null

*/





document.querySelector("h3").childNodes;


/*

Output :- 

NodeList [text]
           0: text
           length: 1
           [[Prototype]]: NodeList

*/




document.querySelector("h3").children;


/*

Output :-    HTMLCollection []

*/




document.querySelector("p").firstChild;

/*

Output :-   

" Hi this file is to demonstrate how to access the childNodes firstChild , LastChild , children , children[0] , children[1]......etc , firtElementChild and lastElementChild "

*/





document.querySelector("p").lastChild;

/*

Output :-   

" Hi this file is to demonstrate how to access the childNodes firstChild , LastChild , children , children[0] , children[1]......etc , firtElementChild and lastElementChild "

*/




document.querySelector("p").firstElementChild;


/*

Output :-  null

*/




document.querySelector("p").lastElementChild;

/*

Output :-  null

*/





document.querySelector("p").childNodes;


/*

Output :- 

NodeList [text]
           0: text
           length: 1
           [[Prototype]]: NodeList

*/




document.querySelector("p").children;


/*

Output :-    HTMLCollection []

*/