// basado en https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html> 


<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>


// intente poner diferentes codigos, pero a ni uno pude hacerlo funcionar


const d = new Date();
document.getElementById("demo").innerHTML = d;


<script> const d = new Date();
document.getElementById("demo").innerHTML = d; > </script>