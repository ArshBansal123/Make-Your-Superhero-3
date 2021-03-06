canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x= 10;
player_y= 10;
player_object= "player.png";
block_image_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img) {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });



}





function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(IMG)   {
        block_image_object= Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed= e.keycode;
    console.log(keyPressed)
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("shift and p pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
    console.log("line 56");
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("shift and m pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;

    }
    console.log("line 66");
}
//move player keys
    if (keyPressed =='38'){
        up();
        console.log("up");
    }

    if (keyPressed =='40'){
        down();
        console.log("down");
    }
    if (keyPressed =='37'){
        left();
        console.log("left");
    }
    if (keyPressed =='39'){
        right();
        console.log("right");
    }
    console.log("line 86");
    //place body parts keys
    if (keyPressed =='70'){
        new_image(thor_face.png);
        console.log("f");
    }
    if (keyPressed =='66'){
        new_image(hulkd_body.png);
        console.log("b");
    }   
    if (keyPressed =='76'){
        new_image(spiderman_legs.png);
        console.log("l");
    }   
     if (keyPressed =='82'){
        new_image(thor_right_hand.png);
        console.log("r");
    }   
    if (keyPressed =='72'){
        new_image(captain_america_left_hand.png);
        console.log("h");
    }

    function up() {
        if (player_y >= 0){
            player_y = player_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("when up arrow key is pressed, X=" + player_x + "y= " + player_y);
            canvas.remove("player_object");
            player_update();
        }
    }
    
    function down() {
        if (player_y <= 500){
            player_y = player_y + block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("when down arrow key is pressed, X=" + player_x + "y= " + player_y);
            canvas.remove("player_object");
            player_update();
        }
    }
    
    function left() {
        if (player_x > 0){
            player_x = player_x - block_image_width;
            console.log("block image width = " - block_image_width);
            console.log("when left arrow key is pressed, X=" + player_x + "y= " + player_y);
            canvas.remove("player_object");
            player_update();
        }
    }
    
    function right() {
        if (player_x <= 850){
            player_x = player_x + block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("when left arrow key is pressed, X=" + player_x + "y= " + player_y);
            canvas.remove("player_object");
            player_update();
        }
    }