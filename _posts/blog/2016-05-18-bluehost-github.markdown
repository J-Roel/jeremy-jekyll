---
layout: post
title:  "Cannot get Bluehost DNS to work with Github Pages"
image:	bluehost-github-pages.png
date:   2016-06-16 12:04:53 -0700
permalink: /bluehost-dns-github-pages/
categories: blog
description: Having difficulties getting Bluehost to talk to your gh-pages branch? It's not as bad as it seems, there just isn't much for documentation from Bluehost. 
---


<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
		<div class="row">
			<hr/>
			<h4>What is this trickery?!</h4>
			<hr/>
			<p>If you are like me and are doing a millions things at a time, you can seriously get caught up on the details.</p>
			<p>But certain things <strong>should just make sense!</strong></p>
			<hr/>
			<ul>
				<li><p>Log in to your Bluehost account.</p></li>
				<li><p>Click on domains.</p></li>
				<li><p>Then click on zone editor.</p></li>
				<li><p>Use the @ in the host and either 199.27.79.133 or 192.30.252.153 in the Points To:</p>
					<div class="row">
						<img class="center-block" src="/assets/images/dns-bluehost.png" style="width: 300px;">
					</div>
					<p>The IP addresses are Github Pages Servers. The @ is for the Apex or root of your domain (www.mydomain.com and mydomain.com)</p>
					<p>Click "add record"</p>
				</li>
				<li><p>Scroll Down to CNAME (Alias).</p>
				<p>In the first box you should have www in the host.</p>
				<p>Click Edit, and put your github pages url in "points to" like so:</p>
				<img class="center-block" src="/assets/images/dns-bluehost-2.png" style="width: 800px;">
				<p>Click save</p>
				</li>
				<li><p>Now Wait... for up to four hours. It took mine about an hour.</p></li>
				<li><p>Keep checking your url. You should eventually see your website or a 404.</p></li>
			</ul>
			<p>I won't go into setting up gh-pages. There are a ton of good resources out there for that.</p>
			<h4>Keep Coding!</h4>
		</div>
	</div>
</div>