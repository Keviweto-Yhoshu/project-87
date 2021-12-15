
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";


function new_Image(get_Image)
{
	// to upload images
	fabric.image.fromURL(get_Image, function(Img){
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToheight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_Image('rr1.png')
		console.log("r")
		
window.addEventListener("keydown", my_keydown);
	}

	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_Image('gr.png')
	console.log("g")
	window.addEventListener("keydown", my_keydown);
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_Image('yr.png')
	console.log("y")
	window.addEventListener("keydown", my_keydown);
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_Image('pr.png')
	console.log("p")
	window.addEventListener("keydown", my_keydown);
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image('br.png')
	console.log("b")
	window.addEventListener("keydown", my_keydown);
	}
	
}

