<script>

</script>

<style>
	/* ROOT STYLE - MAYBE MOVE TO GLOBAL CSS
:root{
	--background-color: rgba(46, 13, 67, 0.8);
}

*, *::before. *::after{
	box-sizing: border-box;
}

body{
	margin: 0;
	background: #222;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 400;
}

.content{
	height: 100vh;
	background-image: url(//source.unsplash.com/weekly?water/1600x900);
	color: white;
	
	background-color: rgb(179, 164, 164);
	background-blend-mode: multiply;
	background-size: cover;
	display: grid;
	place-items: center;
}

.content h1{
	font-size: 2rem;
	color: black;
	background: grey;
	border-radius: 5px;
}

*/
/* Navigation Styles Start Here */

header{
	background-color:  rgba(0, 0, 0, 0.5);;	
	text-align: center;
	position: fixed;
	z-index: 999;
	width:100%;
}

.logo {
	color: #ffffff;
	/* style as neccessary*/
}
/* no need to display checkbox. It is still there, we just can't see it. We will create hamburger icon in span element inside lable*/
.nav-toggle{
	display: none;
}

.nav-toggle-label{
	position: absolute;
	top: 0;
	right: 0;
	margin-right: 1rem;
	color: #ffffff;
	height: 100%;
	display: flex;
	align-items: center;
}
/* create hamburger icon middle line*/
.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after{
	display: block;
	background: white;
	height: 2px;
	width: 2rem;
	border-radius: 2px;
	position: relative;
}
/* create hamburger icon top and bottom lines. To begin with all three lines are overlapping or stacked*/
.nav-toggle-label span::before,
.nav-toggle-label span::after{
content:''; /* must have empty content */
position: absolute;
}
/* Move bottom line down*/
.nav-toggle-label span::before{
	bottom: 7px;
}
/* Move bottom line up*/
.nav-toggle-label span::after{
	top: 7px;
}


nav{
	position: absolute;
	text-align: left;
	top: 100%; /* this aligns the top of the nav dropdown with the bottom of the header element */
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
	/* add transition to menu openning and closing*/
	transform: scale(1, 0);
	transform-origin: top;
	transition: transform 400ms ease-in-out;
}

nav ul{
	margin: 0;
	padding: 0;
	list-style: none;
}

nav li{
	margin-bottom: 1rem;
	margin-left: 1rem;
}

nav a {
	color: white;
	text-decoration: none;
	font-size: 1.2rem;
	text-transform: uppercase;
	opacity: 0;
	transition: opacity 150ms ease-in-out;
}
nav a:hover{
color: rgb(138, 118, 118);
}
/* toggle nav off and on */
/* add transition to menu openning and closing*/
.nav-toggle:checked ~ nav{
transform: scale(1, 1)
}

.nav-toggle:checked ~ nav a{
	opacity: 1;
	transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px){
	.nav-toggle-label{
		display: none;
	}
	header{
		display: grid;
		grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
	}

.logo{
	grid-column: 2 / 3 ;
}

nav{
	all: unset; /* to remove all previous settings */
	grid-column: 3/4;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

nav a{
	opacity: 1;
	position: relative;
}

nav a::before{
	content: '';
	display: block;
	height: 5px;
	background: white;
	position: absolute;
	top: -0.75rem;
	left: 0;
	right: 0;
	transform: scale(0,1);
	transition: transform ease-in-out 250ms;

}

nav a:hover::before{
	transform: scale(1,1);
	transform-origin: left;
}
nav ul{
	display: flex;
	justify-content: flex-end;

}

nav li{
	margin-left: 2rem;
	margin-bottom: 0;
}
} /* end of media query */
</style>

<!-- Start HTML -->
<header>
<h1 class="logo">Meetup</h1>
<!-- must have id for form css to work as form only looks for an ID. Will not work with class -->
<input type="checkbox" id="nav-toggle" class="nav-toggle">
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Services</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>

<label for="nav-toggle" class="nav-toggle-label">
	<span></span>
</label>
</header>

<div class="content">
	<h1>Your Content Here</h1>
</div>
	
