/*=============================================
-----------------------------------
Copyright (c) 2016 Lachlan Burndred
-----------------------------------
@file: main.js
@date: 16/04/2016
@author: Lachlan Burndred
@brief: A game handler for an assignment
===============================================*/

{ // Player Object
    var player = new GameObject();
    player.radius = 32;
    player.speed = 500;
    player.position = new Vector2();
    player.position.y = canvas.clientHeight / 2;
    player.position.x = canvas.clientWidth / 2;
    player.color = "blue";
} // Player Object

player.Update = function()
{
    if (up)
    {
        if (player.position.y <= player.radius)
        {
            player.position.y = player.radius;
        }
        else
        {
            player.position.y -= (player.speed * Time.deltaTime);
            console.log(player.position.y);
        }
    }

    if (down)
    {
        if (player.position.y >= (canvas.clientHeight - player.radius))
        {
            player.position.y = (canvas.clientHeight - player.radius);
        }
        else
        {
            player.position.y += (player.speed * Time.deltaTime);
            console.log(player.position.y);
        }
    }

    if (left)
    {
        if (player.position.x <= player.radius)
        {
            player.position.x = player.radius;
        }
        else
        {
            player.position.x -= (player.speed * Time.deltaTime);
            console.log(player.position.x);
        }
    }

    if (right)
    {
        if (player.position.x >= (canvas.clientWidth - player.radius))
        {
            player.position.x = (canvas.clientWidth - player.radius);
        }
        else
        {
            player.position.x += (player.speed * Time.deltaTime);
            console.log(player.position.x);
        }
    }
    // Draw the player
    player.Draw();

} // Updates the player's properties.

player.Draw = function()
{
    // Clear screen.
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    // Save the canvas state.
    context.save();

    // Draw the player.
    context.beginPath();
    context.fillStyle = player.color;
    context.arc(player.position.x, player.position.y, player.radius, 0, Math.PI * 2);
    context.fill();
    context.closePath();

    // Restore the canvas state.
    context.restore();

} // Draws the player to the screen.

function Update()
{
    player.Update();
} // Main Update Function

$(document).keydown(function (event)
{
    if (event.which == KeyCode.w)
    {
        up = true;
    }

    if (event.which == KeyCode.s)
    {
        down = true;
    }

    if (event.which == KeyCode.a)
    {
        left = true;
    }

    if (event.which == KeyCode.d)
    {
        right = true;
    }
}); // Keydown movement start

$(document).keyup(function (event)
{
    if (event.keyCode == KeyCode.w)
    {
        up = false;
    }

    if (event.keyCode == KeyCode.s)
    {
        down = false;
    }

    if (event.keyCode == KeyCode.a)
    {
        left = false;
    }

    if (event.keyCode == KeyCode.d)
    {
        right = false;
    }
}); // Keyup movement stop

setInterval(function ()
{
    Time.Update();
    Update();
}, 1000 / FPS); // Base function to run Update at 60fps.