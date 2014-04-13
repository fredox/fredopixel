// La madre del cordero

var pixelSystem = {

    pixelGrid : [],
    
    printPixel : function( x, y, pixelColor )
    {
        if ( pixelColor != '#FFFFFF' )
        {
            ctx.fillStyle = pixelColor;
        }
        
        ctx.fillRect( x, y, pixelSize, pixelSize );

        if ( showGrid == 1 )
        {
            ctx.strokeStyle = 'black';
            ctx.strokeRect( x, y, pixelSize, pixelSize );
        }
    },

    savePixel : function( x, y, pixelColor )
    {
        this.pixelGrid.push( { xcoord:x, ycoord:y, dx:0, dy:0, pcolor:pixelColor } );
    },

    printAllPixels : function()
    {
        var pixels = this.pixelGrid;

        for ( var i=0; i < this.pixelGrid.length; i++ )
        {
            var finalx = pixels[i].xcoord + pixels[i].dx;
            var finaly = pixels[i].ycoord + pixels[i].dy;

            this.pixelGrid[i].xcoord = finalx;
            this.pixelGrid[i].ycoord = finaly;

            this.printPixel( finalx, finaly, pixels[i].pcolor );
        }
    },

    clear : function()
    {
        if (love){
            ctx.fillStyle = '#ADD8E6';
        }else{
            ctx.fillStyle = '#FFF';
        }


        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();
    },
    
    
    update : function()
    {
        //pixelSystem.ipf_turnWhite();
        pixelSystem.clear();

        pixelSystem.ipf_fly();
        
        if (love){
            /* San valentin bonus*/
            ctx.fillStyle = "black";
            ctx.font = "bold 66px Arial";
            ctx.fillText("I love U", 210, 270);
            ctx.fillText(love, 210, 370); 
        }

        pixelSystem.printAllPixels();
        
        
    },

    mouseOnPixel : function( xPixel, yPixel )
    {

        // Sumamos mas dos, para que la sensibilidad al pasar el raton sea mas grande y 
        // reaccionen antes. Es como si los cuadros fuesen 2 pix mas grandes.
        var xCond = ( ( mouse.x > xPixel + 2 ) && ( mouse.x < ( xPixel + 2 + pixelSize ) ) );
        var yCond = ( ( mouse.y > yPixel + 2 ) && ( mouse.y < ( yPixel + 2 + pixelSize ) ) );

        return ( xCond && yCond );
    },

    // interactive functions
    
    ipf_turnWhite : function()
    {
        var pixels = this.pixelGrid;

        for ( var i=0; i < this.pixelGrid.length; i++ )
        {
            if ( this.mouseOnPixel( pixels[i].xcoord, pixels[i].ycoord ) )
            {
                this.pixelGrid[i].pcolor = 'white';
            }
        } 
        
    },

    ipf_fly : function()
    {
        var pixels = this.pixelGrid;
        var multx  = 1;
		var multy  = 1;

        for ( var i=0; i < this.pixelGrid.length; i++ )
        {
            if ( this.mouseOnPixel( pixels[i].xcoord, pixels[i].ycoord ) )
            {
                if ( ( pixels[i].dx == 0 ) && ( pixels[i].dy == 0 ) )
                {
                    if ( Math.random() >= 0.5 )
                    {
                        multx = -1;    
                    }
                    
                    if ( Math.random() >= 0.5 )
                    {
                        multy = -1;    
                    }

                    this.pixelGrid[i].dx = Math.floor( ( Math.random() * 4 * multx ) + ( 1 * multx ));
                    this.pixelGrid[i].dy = Math.floor( ( Math.random() * 4 * multy ) + ( 1 * multy ));
                }
			}
		   
		   if ( bouncing == 1 )
		   {
		   	var bouncingParams = {dx:0, dy:0};

		   	bouncingParams = tryBouncing( pixels[i].xcoord, pixels[i].ycoord, pixels[i].dx, pixels[i].dy );

		   	this.pixelGrid[i].dx = bouncingParams.dx;
		   	this.pixelGrid[i].dy = bouncingParams.dy;
		   }

        } 
        
    }

}





