---
layout: post
title:  "Simple Templating"
date:   2016-06-16 12:04:53 -0700
permalink: /simple-templating/
categories: blog
image:
description: Ever needed a template engine? That just does templates and nothing complicated? Here is a little slice of my Simple Blogger software. It finds your template tags and loads the corresponding file dynamically; no build tooling or servers required
---


<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
		<div class="row">
			<hr/>
			<h4>Simple Templating</h4>
			<hr/>
			<p>Simple templating works by gathering all the template tags, then for each it makes an asynchronous call to the templates folder and grabs the html. It then replaces the template tag with the html.</p>
			<p>Pros: Fast, super easy, perfect for small portfolios, simple sales sites or blogs</p>
			<p>Cons: Makes calls for each template which could potentially be expensive on a low bandwidth device.</p>

			<hr/>
			<p><strong>To use:</strong></p>
			<ul>
				<li><p>Must have jQuery installed.</p></li>
				<li><p>Copy the code below and include it in your scripts at the bottom of your html file below jQuery.</p>
					<code><pre>
function buildTemplates(elToBuild, listElToBuild){

	if(elToBuild === "" || elToBuild == null || elToBuild == undefined){
		ourNodeToBuildOn = $("template");//All lists on DOM
	} else {
		ourNodeToBuildOn = elToBuild;
	}

	var count = -1;
	ourNodeToBuildOn.each(function( index ){
		count++;
	});
	
	ourNodeToBuildOn.first().attr('link', function(){
		
		var templateLink = "/templates/" + $(this).attr('link');
		$.ajax({
			method: "GET",
			url: templateLink,
			context: this,
			success : function(result){
				var theHtml = result.toString();
				$(this).replaceWith(theHtml);
			},
			error : function(err){
				console.error("@ERROR Simple Blogger: \n Error Loading Template. \n Check &lt;template link=''&gt;&lt;/template&gt; tags - Make sure you are referencing a valid link and that the html file exists in the template directory. \n", err);
				alert("@ERROR Simple Blogger: \n Error Loading Template. \n Check &lt;template link=''&gt;&lt;/template&gt; tags - Make sure you are referencing a valid link and that the html file exists in the template directory. Check console for more information. \n", err);
				count = 0;
			},
			complete : function(info){
				if(count > 0){
					updateDOM();
					buildTemplates(elToBuild);
				} else {
					//Next build our static content at a folder location
					buildLists(listElToBuild);//Only after all templates are loaded
				}
			}
		});
	});
};//End buildTemplates


				</pre></code>
				</li>
				<li><p>Add a folder called "templates" to your root. Must be called templates.</p></li>
				<li><p>Place the necessary files in there, like header.html. You don't need the head tags or scripts or anything, just the html elements for your header.</p></li>
				<li><p>In the HTML file (like index.html), you need to put a template tag, with the link attribute to the file you want to load. It defaults to the templates folder on your root. So my index.html looks like this:</p>
					<code><pre>
&lt;template link="header.html"&gt;&lt;/template&gt;
&lt;template link="body.html"&gt;&lt;/template&gt;
&lt;template link="footer.html"&gt;&lt;/template&gt;
					</pre></code>
				</li>
			</ul>

			<hr/>
			<h4>Hope this helps!</h4>
			<hr/>


			
		</div>	
	</div>
</div>