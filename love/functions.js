// functions

    function fredopixelInit()
    {
        
        
        if (love)
        {
            savePixelText('h', marginX, marginY);
        }
        else
        {
            // Decoration

            // logo text
            savePixelText( 'fredo', marginX, marginY );
            savePixelText( 'pixel', marginX + 6, introSpace );
            
            var decoPosX    = ( ( 21 + marginX ) * pixelSize );
            var decoLimPosX = ( ( 27 + marginX ) * pixelSize );
            var decoInc     = ( 2 * pixelSize );
            var decoPosY    = ( ( 16 + marginY ) * pixelSize );

            for ( var dposx=decoPosX; dposx<decoLimPosX; dposx+=decoInc )
            {
                saveBigPixel( dposx, decoPosY, getColor( '#2E857F' ) );
            }
            

            saveBigPixel( ( 12 + marginX ) * pixelSize, ( 16 + marginY ) * pixelSize, getColor( '#00DEE6' ) );
            saveBigPixel( ( 15 + marginX ) * pixelSize, ( 16 + marginY ) * pixelSize, getColor( '#0FC0C4' ) );
            saveBigPixel( ( 18 + marginX ) * pixelSize, ( 16 + marginY ) * pixelSize, getColor( '#2E857F' ) );

        }
    }


    function saveBigPixel( x, y, color )
    {
        savePixel( x, y, color );
        savePixel( x + pixelSize, y, color );
        savePixel( x, y + pixelSize, color );
        savePixel( x + pixelSize, y + pixelSize, color );
    }

    function savePixelText( text, xcoord, ycoord )
    {  
        var arrayPixelText = text.split('');
        var xAcc = xcoord;

        for ( var index=0; index<arrayPixelText.length; index++ )
        {
            letter = arrayPixelText[index];
            x = xAcc * pixelSize;
            xAcc = xAcc + letterWidth[letter] + kerning
            y = ycoord * pixelSize;
            saveLetter( arrayPixelText[index], x, y ); 
        }

    }

    function savePixel( x, y, pixelColor )
    {
        pixelSystem.savePixel( x, y, pixelColor );        
    }

    function saveLetter( letter, x, y )
    {  
        var pixelLetter = letters[letter].split('');
        var initX = x;
        var cursorX = 1;
        var cursorY = 1;
        var indexColor = 0;

        // Aplicamos el margen superior
        y = y + ( letterMarginTop[letter] * pixelSize );

        randomLC = randomColor();

        for ( var index=0; index<pixelLetter.length; index++ )
        {
            indexColor = pixelLetter[index]; 
            pixelColor = pixelColors[indexColor];

            if ( randomColorLetter == 1 )
            {
                pixelColor = randomLC;
            }

            if ( indexColor != 0 )
            {
                savePixel( x, y, pixelColor );
            }

            if ( ( cursorX % letterWidth[letter] ) == 0 )
            {
                 y = y + pixelSize;
                 x = initX;
            }
            else
            {
                 x = x + pixelSize; 
            }

            cursorX = cursorX + 1;
        }
    }

    function getColor( color )
    {
        if ( randomColorLetter == 1 )
        {
            return randomColor();
        }
        
        return color;
    }

    function randomColor()
    {
        var colorComponent = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','F'];
        var c1 = colorComponent[Math.floor(Math.random() * colorComponent.length)];
        var c2 = colorComponent[Math.floor(Math.random() * colorComponent.length)];
        var c3 = colorComponent[Math.floor(Math.random() * colorComponent.length)];

        //return '#' + c1 + 'F' + c2;
        return '#FF' + c3 + c3 + c1 + c2;
    }

    function getMousePosition( e )
    {
        if( e.layerX ) 
        {
        	if (is_chrome)
        	{
        		mouse.x = e.layerX;
        		mouse.y = e.layerY;
        	}
        	else
        	{
	    		mouse.x = e.layerX - canvas.offsetLeft;
	    		mouse.y = e.layerY - canvas.offsetTop;
	    	}
        }   
    }

	function tryBouncing( x, y, dx, dy )
	{
		if ( ( y <= 0 ) || ( y >= ( canvas.height - pixelSize ) ) )
		{
			return { dx:dx, dy:-dy };
		}

		if ( ( x <= 0 ) || ( x >= ( canvas.width - pixelSize ) ) )
		{
			return { dx:-dx, dy:dy }
		}

		return { dx:dx, dy:dy }
	}

 

