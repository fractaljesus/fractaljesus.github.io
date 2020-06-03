/*	Stimpy Mouse */

function stimpy(  )	
{
	this.x;
	this.y;
	this.path;
	this.img = new Image(  );
		this.img.src = "../img/stimpy.png";

	
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
		
		rightSide = this.getIndex( this.x + 1, this.y );
		downSide = this.getIndex( this.x, this.y + 1 );
		leftSide = this.getIndex( this.x - 1, this.y );
		upSide = this.getIndex( this.x, this.y - 1 );
		 mySide = this.getIndex( this.x, this.y );
		
			if( rightSide != 666 && rightSide <= downSide && rightSide <= leftSide && rightSide <= upSide )	{
				if( rightSide < mySide )	{
					if( this.inPath( this.x + 1, this.y ) == -1 )		{
						this.path[ this.path.length ] = new xyz( this.x + 1, this.y );
																		}
						this.x++;
							return;
											}
																										}
			
			if( downSide != 666 && downSide <= rightSide && downSide <= leftSide && downSide <= upSide )		{
				if( downSide < mySide )		{
					if( this.inPath( this.x, this.y + 1 ) == -1 )		{
						this.path[ this.path.length ] = new xyz( this.x, this.y + 1 );
																		}
						this.y++;
							return;
											}
																										}
																										
			if( leftSide != 666 && leftSide <= rightSide && leftSide <= downSide && leftSide <= upSide )	{
				if( leftSide < mySide )		{
					if( this.inPath( this.x - 1, this.y ) == -1 )		{
						this.path[ this.path.length ] = new xyz( this.x - 1, this.y );
																		}
						this.x--;
							return;
											}
																										}
																										
			if( upSide != 666 && upSide <= rightSide && upSide <= downSide && upSide <= leftSide )	{
				if( upSide < mySide )		{
					if( this.inPath( this.x, this.y - 1 ) == -1 )		{
						this.path[ this.path.length ] = new xyz( this.x, this.y - 1 );
																		}
						this.y--;
							return;
											}
																								}

			//тупик
			this.path[ this.inPath( this.x, this.y ) ].z++;
				if( this.path[ this.inPath( this.x, this.y ) ].z == 100 )	{ this.path = [ new xyz( this.x, this.y ) ]; }
					this.walk(  );
			
							}
							
	this.getIndex = function( sx, sy )	{
		
		try { 	
			if( sx < 0 )	{ return 666; }
			if( sy < 0 )	{ return 666; }
			if( sx >= poleX )	{ return 666; }
			if( sy >= poleY )	{ return 666; }
				if( matrix[ sx ][ sy ] == 1 )		{ return 666; }
			}
		catch(err)	{ return 666; }
		
		if( this.inPath( sx, sy ) == -1 )		{ return 0; }
		else{ return this.path[ this.inPath( sx, sy ) ].z; }
		
										}
	
	this.inPath = function( zx, zy )	{
		for( p=0; p < this.path.length; p++ )		{
			if( this.path[ p ].x == zx && this.path[ p ].y == zy )		{ return p; }
													}
		return -1;
										}
	
}