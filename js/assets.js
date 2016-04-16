/*=============================================
-----------------------------------
Copyright (c) 2016 Lachlan Burndred
-----------------------------------
@file: assets.js
@date: 16/04/2016
@author: Lachlan Burndred
@brief: The main asset file for the AssignmentSite.
===============================================*/
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var FPS = 60.0;
var gameObjects = [];

// Movement variables
var left = false;
var right = false;
var up = false;
var down = false;

var KeyCode = {
    w: 87,
    a: 65,
    s: 83,
    d: 68
}

var Time = {
    now: 0,
    lastUpdate: 0,
    deltaTime: 0,
    Update: function()
    {
        this.now = Date.now();
        this.deltaTime = (this.now - this.lastUpdate) / 1000;
        this.lastUpdate = Date.now();
    }
} // Handles deltaTime

function GameObject()
{
    var gameObject = {
        width: 32,
        height: 32,
        color: "blue",
        position: new Vector2(),
        rotation: 0,
        Update: function ()
        {

        }
    }
}


// Main update function
function Update()
{
    console.log(Player.width);
}

$(canvas).keydown(function (event)
{
    if (event.keyCode == KeyCode.w)
    {
        up = true;
    }

    if (event.keyCode == KeyCode.s)
    {
        down = true;
    }

    if (event.keyCode == KeyCode.a)
    {
        left = true;
    }

    if (event.keyCode == KeyCode.d)
    {
        right = true;
    }
}); // Keydown movement start

$(canvas).keyup(function (event)
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

// Sets to run update every frame @ 60fps
setInterval(function ()
{
    Time.Update();
    Update();
}, 1000 / FPS);