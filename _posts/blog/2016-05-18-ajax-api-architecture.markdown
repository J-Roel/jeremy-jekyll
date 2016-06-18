---
layout: post
title:  "OMDb API with AJAX"
date:   2016-06-15 12:04:53 -0700
author: John Doe
permalink: /omdb-api-with-ajax/
categories: blog
image:	ajax.jpg
description: This tutorial will guide you through the very basics of building an html page and displaying data retrieved from an API. We will use html, javascript, jQuery, AJAX and the OMDb API endpoint.
---

<div class="row">
	<div class="col-xs-8 col-sm-8 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
		<div class="row">
		<hr/>
			<p><strong>Prerequisites:</strong></p>
			<ul>
				<li>Understanding of HTML and CSS</li>
				<li>Basic understanding of JavaScript and jQuery</li>
			</ul>
			<p><strong>Goals:</strong></p>
			<ul>
				<li><a href="#1">Understand what AJAX is and how it relates to JQuery and Javascript</a></li>
				<li><a href="#2">Setup our html and javascript</a></li>
				<li><a href="#3">Build our URI and understand how this is part of our request object</a></li>
				<li><a href="#4">Coding our AJAX call</a></li>
				<li><a href="#5">Render data to our html</a></li>
				<li><a href="#6">End Results</a></li>
				<li><a href="#7">Stretch Goals</a></li>
			</ul>
		</div>
	</div>
	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	</div>
</div>

<div id="1">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
		</div>
		<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
			<hr/>
			<h4>Section 1 - Understanding AJAX</h4>
			<hr/>
			<p>To understand what AJAX is, we first need to note that it is not the cleaning product.</p>
			<p>Yeah, I got crickets on that one...</p>
			<p>AJAX stands for Asynchronous JavaScript and XML and is a helpful tool to build a XMLHttpRequest Object.</p>
			<p><strong>Let's outline how it works:</strong></p>
			
			<ul>
				<li><p>Your program is running on a user's computer.</p></li>
				<li><p>Your program tells the browser what data it needs in a package called a XHLHttpRequest Object.</p></li>
				<li><p>The Request Object tells the user's browser to send a request to a certain location where this data is stored.</p></li>
				<li><p>The internet location that intercepted your request, then determines what information to send back, based on your Request Object asked for.</p></li>
				<li><p>Your program then has to set and wait for the data to be returned from the endpoint (or API). This is called an Asynchronous function.</p></li>
				<li><p>Once returned, the data can now be parsed.</p></li>
				<li><p>We then tell the browser how to utilize and render the data.</p></li>
			</ul>
			
			<p><strong>Why do we care?</strong></p>
			<p>Well, imagine if you had 5000 users. Each user has an address, zip, first and last name, nickname, password, email, etc... That would be a lot of data to store on every one of your user's computers. Also, I would appreciate it if you didn't give 5000 people my email address.</p>
			<p>So Application Program Interfaces, or APIs, provide security, they keep your data manageable, and your program's footprint small. AJAX talks to these APIs in a convenient and clean way.</p>
		</div>
	</div>


	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<p><strong>How does this work with Javascript?</strong></p>
			<p>Glad you asked. AJAX is built in to jQuery. So you don't need anything special for AJAX to work with Javascript. Simply include jQuery and you are good to go.</p>
			<p>AJAX is a concept. Basically it is a script forged on the paradigm of Asynchronous functionality.</p>
			<p>A computer program is very linear in nature. Say I'm running a program on Computer A and request data from Computer B. By the time Computer B sent the data back... The program running on computer A would be done running. That wouldn't do us any good.</p>
			<p>AJAX allows a sort of timing protocol to ensure that we can obtain the data and control the flow of our computer program.</p>
			<p>And yes, you could preform all of this functionality in raw javascript. But, AJAX gives you a nice clean Promise style method to work with. Consider it a layer of functions setting on top of Javascript.</p>
		</div>
	</div>


	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<p><strong>Good things to note:</strong></p>	
			<ul>
				<li><p>JQuery returns and passes objects very conveniently for us.</p></li>
				<li><p>That object created by our AJAX call includes the request type, state, headers and many other needed bits of information. *Note: <a href="https://http.cat/">Kittens are the best way to memorize your states.</a></p></li>
				<li><p>AJAX is great! We don't have to deal with all those little things.</p></li>
				<li><p>We then control the flow of our code based on what data is returned.</p>
				<code><pre>
				success: function(data) {
					//Alright! We got back our data, lets do something with it.
				},
				error: function(err){
					//Ah; sorry, there was nothing returned.
				}</pre></code>
				</li>
			</ul>
		</div>
	</div>
</div>


<div id="2">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
				<h4>Section 2 - HTML and Javascript</h4>
			<hr />
			<p>If you are new to html and javascript, it is always good practice to start from a clean slate. Make a directory structure similar to this: (index.html will be in the root ajax-tut)</p>
			<ul>
				<li class="dir"><p>ajax-tut</p></li>
				<ul>
					<li class="dir"><p>css</p></li>
					<ul>
						<li class="dir"><p>styles.css</p></li>
					</ul>
					<li class="dir"><p>js</p></li>
					<ul>
						<li class="dir"><p>main.js</p></li>
					</ul>
					<li class="dir"><p>index.html</p></li>
				</ul>
			</ul>

		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
			<p><strong>Setup a server.</strong></p>
			<p>Let's take a second and setup a server before we start typing code.</p>
			<p>Since we will be making API calls, we need to establish that we are not merely working off our computer, but that we are serving up our website/app. It gets a little difficult to explain, but for almost all of your projects, you will want to be running a server. This will prevent a lot of headaches and is a good habit to get into. So first we need to be running Node.js, then install our http-server, and finally run it.</p>
			<p><strong>FOR MAC AND WINDOWS:</strong></p>
			<ul>
				<li><p>Install Node.js</p>
					<ul>
						<li><p><a href="https://nodejs.org/en/">Link to Node.js</a></p></li>
						<li><p>Mac will show the mac version, windows will show the windows version.</p></li>
					</ul>
				</li>
				<li><p>Once Node is installed you will have to open terminal (or command prompt).</p></li>
				<li><p>Now you have access to Node Package Manager (NPM), simply type:</p>
					<code><pre>npm install http-server -g</pre></code>
				<p>*Note: If you type --help, you will see -g will install the desired software globally. If you are on a mac, you may need to install this with sudo for permissions.</p></li>
				<li><p>Next, we need to make sure we are in the directory we wish to serve up. So cd into ajax-tut.</p></li>
				<li><p> Now at the command line create a server:</p>
				<code><pre>http-server -c-1</pre></code>
				<p>*Note: the -c will make sure your cache is cleared every time you refresh. This is great because you know you are getting up-to-date versions of your code and not something stored in cache.</p></li>
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
		<hr/>
			<p><strong>Now on to the code:</strong></p>
			
			<ul>
				<li><p>First, let's make a HTML skeleton. In index.html</p>
<code><pre>&lt;!DOCTYPE html&gt;
&lt;head&gt;
	&lt;title&gt;Ajax Example&lt;/title&gt;
	&lt;link rel="stylesheet" type="text/css" href="/css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;!--HTML CONTENT GOES HERE--&gt;

	&lt;h1&gt;Hello World!&lt;/h1&gt;

	&lt;script src="https://code.jquery.com/jquery-3.0.0.min.js"&gt;&lt;/script&gt;
	&lt;script type="text/javascript" src="/js/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre></code>
				</li>
				<li><p>Next, let's add some styles to our /css/styles.css:</p>
					<code><pre>h1{
	color: red;
}</pre></code>
				</li>
				<li><p>Finally, add some javascript in our js/main.js:</p>
					<code><pre>$(document).ready(function(){

	alert("Ready!");

});//End of document.ready</pre></code>
				</li>
				<li><p>Lastly we need to open a browser window and in the address bar type:</p>
				<code><pre>localhost:8080</pre></code>
				<p>*Note - The http-server defaults to 8080. But you can change the port if you wish.</p>
				</li>
				<li><p>You should have a popup that says READY! and a red Hello World!</p>
				<p>If you don't see those two, please review section 2. Make sure you're file structure is setup correctly and that jQuery is installed and running. You will see the READY! if jQuery is running correctly.</p></li>

			</ul>


			<p><strong>Alright, now on to the fun stuff!</strong></p>


		</div>
	</div>
</div>




<div id="3">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
			<h4>Section 3 - Building the AJAX call</h4>
			<hr/>
			<p>We will be working with the <a href="http://www.omdbapi.com/">OMDb API</a>. I highly recommend <a href="http://www.omdbapi.com/">checking out there site</a> and reviewing their API usage and parameters.</p>
			<hr/>
			<p><strong>URI</strong></p>
			<p>The OMDb API usage says that we should send all our API requests to:</p>
			<code><pre>http://www.omdbapi.com/?</pre></code>
			<p>That is called the URI or Uniform Resource Identifier.</p>
			<hr/>
			<p>I said in the beginning we would be using a XMLHttpRequest Object. And that is exactly what we are building here.</p>
			<p>We have two parts:</p>
			<ul>
				<li><p>Request - which contains the header info, state, etc... we won't worry about those now</p></li>
				<li><p>URI - which contains:</p></li>
				<ul>
					<li><p>Protocol type: http, ftp, etc.</p></li>
					<li><p>URL (location): In this tut it is: www.omdbapi.com</p></li>
					<li><p>Parameters</p></li>
				</ul>
			</ul>

			<p>Now let us look at the third part part of our URI, the paramters!</p>
			<hr/>


			<p>These parameters tell the API what data we want.</p>
			<p>We will be using these setting for our parameter:</p>
			<code><pre>"?s=frozen&amp;plot=short&amp;r=json"</pre></code>
			<ul>
				<li><p>the s is for search</p></li>
				<li><p>Frozen is the the keyword or title we will be searching for.</p></li>
				<li><p>the &amp; tells the API we have another parameter.</p></li>
				<li><p>plot is for... plot. It can be short or long. we want the short version.</p></li>
				<li><p>and finally r is for return, which we want to return a JSON object</p></li>
			</ul>
			<p>Awesome! We now have our URI that we can send to our API. Want to check it? Copy and paste this code below in a new browser tab. You will recieve all the JSON information from the OMDb API endpoint.</p>
			<code><pre>http://www.omdbapi.com/?s=frozen&amp;y=&amp;plot=short&amp;r=json</pre></code>

			<hr/>
			<p><strong>So now what?</strong></p>
			<p>We know what the client is going to send to the API, right?
			What does that look like once it leaves our computer?</p>
			<p>Here is a quick break down:</p>

			<img class="aligncenter wp-image-171 size-full" src="/assets/images/server-client.png" alt="Screen Shot 2016-05-16 at 10.56.48 PM" width="530" height="487" />

			<p>Great! You now have the basic concept of what makes the internet tick. We also understand the purpose behind APIs, and how to communicate with them. Let's build our AJAX function and see some data.</p>
		</div>
	</div>
</div>


<div id="4">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr />
			<h4>Section 4 - Coding the AJAX call</h4>
			<hr />
			
			<p><strong>HTML</strong></p>
			<p>Remove the Hello World and put the below code inside the body tag:</p>
			<code><pre>
				&lt;h1&gt;Ajax Movie Search&lt;/h1&gt;
				&lt;input id="movie-title"/&gt;
				&lt;button id="do-search"&gt;Search&lt;/button&gt;
				&lt;div id="container"&gt;&lt;/div&gt;
			</pre></code>	
			<p><strong>Javascript</strong></p>
			<ul>
				<li><p>Get our information from our html. Then setup our basic ajax call. Put this Inside our $(document).ready(function(){</p>
<code><pre>$("#do-search").on('click',function(){
	//Get data from input box
	var movieTitle = $('#movie-title').val();

	//Build our URI with the movie title
	var sURL = "http://www.omdbapi.com/?s=" + movieTitle + "&plot=short&r=json";

	//Grab our container and assign it to variable for later use
	var container = $('#container');

	$.ajax({
		method: 'GET',
		url: sURL,
		success: function(results){
			console.log("Done: ", results);
		},
		error: function(error){
			console.error('@ERROR', error);
		}
	});

});</pre></code>
				</li>
			</ul>
		</div>
	</div>
</div>




<div id="5">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
			<h4>Section 5 - Adding the data to our HTML</h4>
			<hr/>
			
			<p>Now we will view our JSON data that is returned from the API.</p>
			<ul>
				<li><p>We have told the API that we would like to have the data returned in a JSON format, so we do not need to parse the data. In most cases you would have to parse the data yourself using provided functions, but I'm trying to keep this very simple as parsing can give unique errors that can be tricky to diagnose.</p></li>
				<li><p>If you go to your browser (hopefully you are using chrome or firefox ;), you can right click any where on the screen. Then select "inspect" from the menu.</p></li>
				<li><p>Now click on the "console" tab. Here you can view the output from our console.log functions in our javascript.</p></li>
				<li><p><strong>Run the program!</strong></p></li>
				<li>
					<p>If all is well and if you typed "Frozen", you should recieve this:</p>
					<img class="aligncenter size-full wp-image-191" src="/assets/images/frozen-results.png" alt="Screen Shot 2016-05-17 at 11.59.11 AM" width="752" height="378" />
					<p>Click the little arrow beside Object to view its contents.</p>
				</li>
				<li><p>Access Array and loop through it.</p>
					<ul>
						<li><p>Use dot notation on the object to access the Search array in the returned object.</p></li>
						<li><p> We will then assign the Search array to a variable called "movies."</p></li>
						<li><p>Next we need to loop through the array of movies</p></li>
						<li><p>On your success function of the ajax call, remove console.log("Done: ", results); and add this:</p>
<code><pre>//store our search results in a variable called movies
var movies = results.Search;

//Loop through the total number of movies found
for(var i = 0; i <= movies.length-1; i++){
	console.log("Movies: ", i, " : ", movies[i]);
}</pre></code>
						</li>

					</ul>
				</li>
			</ul>
			<p>Remember, arrays start at 0. So 0 to 9 = a count of 10. To fix this, put a -1 behind your movies.length in the For loop.</p>
			<hr/>

			<p><strong>2 - Access individual movies:</strong></p>
			<p>We have broken down our JSON object to the point where we can grab each individual movie's information.</p>
			<p>Now we can access each movie's key/value pair like this:</p>
			<code><pre>movies[i].title</pre></code>
			<p>To test, change the console.log in the for loop to movies[i].title</p>
			<hr/>
			<p><strong>Pretty simple right?</strong></p>
			<p>Now we will use jQuery's append method to add the movies to our html node that we stored in a variale earlier called "container"</p>
			<p>We will use an html list and an img tag to display our data. Inside your For Loop, replace the console.log with: </p>
<code><pre>container.append('&lt;li&gt; &lt;img src=' + movies[i].Poster + '/&gt;&lt;/li&gt;' +
	'&lt;li&gt;' + movies[i].Title + '&lt;/li&gt;' +
	'&lt;li&gt;' + movies[i].Type + '&lt;/li&gt;' +
	'&lt;li&gt;' + movies[i].Year + '&lt;/li&gt;');</pre></code>
	<p><strong>Great! Now you can run your code and it SHOULD populate your html page with our 10 movies.</strong></p>
			

		</div>
	</div>
</div>
<hr/>



<div id="6">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
			<h4>End Result:</h4>
			<hr/>

			<p><strong>index.html</strong></p>
				<img src="/assets/images/index-html-omdb-ajax.png" alt="Screen Shot 2016-05-17 at 10.30.18 PM" width="1025" height="567" class="aligncenter size-full wp-image-201" />

			<p><strong>main.js</strong></p>
				<img src="/assets/images/main-js.png" width="846" height="845" class="aligncenter size-full wp-image-202" />

			<hr/>
		</div>
	</div>
</div>


<div id="7">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
			<hr/>
			<h4>Stretch GOALS!</h4>
			<hr/>

			<ul>
			<li><p>Use CSS to make everything look slick and nice.</p></li>
			<li><p>Use the OMDb API to grab more information from the API and render it on your HTML website.</p></li>
			</ul>

		</div>
	</div>
</div>

<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
		<hr/>
		<h4>Hope you enjoyed the tutorial.</h4>
		<hr/>
	</div>
</div>