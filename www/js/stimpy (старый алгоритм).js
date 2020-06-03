/*	Stimpy Mouse */

function stimpy(  )	
{
	this.x;
	this.y;
	this.path;

	
	this.spawn = function()	 {
		while( true )	{
			x = Math.floor( Math.random() * poleX );
			y = Math.floor( Math.random() * poleY );
				if( free( x, y ) )		{
					this.x = x;
					this.y = y;
						this.path = [ new xyz( this.x, this.y ) ];
							break;
										}
						}
							 }
			 
	this.spawn()
	
	this.walk = function()	{
		
		//определяем наилучший свободный (белый путь)
		
		if( Math.floor( Math.random() * 2 ) < 10 )		{
			
			deltaX = 0;
			deltaY = 0;
			
			tempX = this.x + 1;		//r
			tempY = this.y;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 1; deltaY = 0; } } catch(err) {}
			tempX = this.x;			//d
			tempY = this.y + 1;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 0; deltaY = 1; } } catch(err) {}
			tempX = this.x - 1;		//l
			tempY = this.y;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = -1; deltaY = 0; } } catch(err) {}
			tempX = this.x;			//u
			tempY = this.y - 1;
				try{ if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 0; deltaY = -1; } } catch(err) {}
				
														}
														
		else	{
				
			deltaX = 0;
			deltaY = 0;
			
			tempX = this.x;			//u
			tempY = this.y - 1;
				try{ if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 0; deltaY = -1; } } catch(err) {}
			tempX = this.x - 1;		//l
			tempY = this.y;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = -1; deltaY = 0; } } catch(err) {}
			tempX = this.x;			//d
			tempY = this.y + 1;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 0; deltaY = 1; } } catch(err) {}
			tempX = this.x + 1;		//r
			tempY = this.y;
				try { if( matrix[ tempX ][ tempY ] == 0 && this.inPath( tempX, tempY ) == -1 )		{ deltaX = 1; deltaY = 0; } } catch(err) {}
				
					}
		
		
			if( deltaX == 0 && deltaY == 0 )	{  }	else 	{ 
				
				sx = this.x + deltaX; 
				sy = this.y + deltaY; 
		
					this.path[ this.path.length ] = new xyz( sx, sy );
					this.x = sx;
					this.y = sy;
						return;
	
																}
		
		//если наилучшее направление не задано, тогда
		//right
			try 	{
				sx = this.x + 1;
				sy = this.y;
				
					if( matrix[ sx ][ sy ] == 0 )		{
						
						try {
							if( this.path[ this.inPath( sx, sy ) ].z <= this.path[ this.inPath( this.x, this.y ) ].z )	{
								this.path[ this.inPath( this.x, this.y ) ].z++;
									this.x = sx;
									this.y = sy;
										return;
																							}
							}
						catch(err)	{  }
						
						if( this.inPath( sx, sy ) == -1 )		{
							this.path[ this.path.length ] = new xyz( sx, sy );
							this.x = sx;
							this.y = sy;
								return;
																}
						else	{  }
						
														}
					}
			catch(err)		{  }

			//down
			try 	{
				sx = this.x;
				sy = this.y + 1;
					if( matrix[ sx ][ sy ] == 0 )		{
						
						try {
							if( this.path[ this.inPath( sx, sy ) ].z <= this.path[ this.inPath( this.x, this.y ) ].z )	{
								this.path[ this.inPath( this.x, this.y ) ].z++;
									this.x = sx;
									this.y = sy;
										return;
																							}
							}
						catch(err)	{  }
						
						if( this.inPath( sx, sy ) == -1 )		{
							this.path[ this.path.length ] = new xyz( sx, sy );
							this.x = sx;
							this.y = sy;
								return;
																}
															
														}
					}
			catch(err)		{  }
			
			//left
			try 	{
				sx = this.x - 1;
				sy = this.y;
					if( matrix[ sx ][ sy ] == 0 )		{
						
						try {
							if( this.path[ this.inPath( sx, sy ) ].z <= this.path[ this.inPath( this.x, this.y ) ].z )	{
								this.path[ this.inPath( this.x, this.y ) ].z++;
									this.x = sx;
									this.y = sy;
										return;
																							}
							}
						catch(err)	{  }
						
						if( this.inPath( sx, sy ) == -1 )		{
							this.path[ this.path.length ] = new xyz( sx, sy );
							this.x = sx;
							this.y = sy;
								return;
																}
															
														}
					}
			catch(err)		{  }
			
			//up
			try 	{
				sx = this.x;
				sy = this.y - 1;
					if( matrix[ sx ][ sy ] == 0 )		{
						
						try {
							if( this.path[ this.inPath( sx, sy ) ].z <= this.path[ this.inPath( this.x, this.y ) ].z )	{
								this.path[ this.inPath( this.x, this.y ) ].z++;
									this.x = sx;
									this.y = sy;
										return;
																							}
							}
						catch(err)	{  }
						
						if( this.inPath( sx, sy ) == -1 )		{
							this.path[ this.path.length ] = new xyz( sx, sy );
							this.x = sx;
							this.y = sy;
								return;
																}
																
														}
					}
			catch(err)		{  }

			//тупик
			this.path[ this.inPath( this.x, this.y ) ].z++;
				//сборс пути, если заблудилась
				if( this.path[ this.inPath( this.x, this.y ) ].z > 3 )	{ this.path = [ new xyz( this.x, this.y ) ]; }
			this.walk(  );
							}
	
	this.inPath = function( zx, zy )	{
		for( p=0; p < this.path.length; p++ )		{
			if( this.path[ p ].x == zx && this.path[ p ].y == zy )		{ return p; }
													}
		return -1;
										}
	
}