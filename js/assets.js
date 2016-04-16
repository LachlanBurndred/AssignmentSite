var FPS = 60.0;

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

// Main update function
function Update()
{
    
}

// Sets to run update every frame @ 60fps
setInterval(function ()
{
    Time.Update();
    Update();
}, 1000 / FPS);