/*	Stimpy Mouse */

function stimpy(  )	
{
	this.x;
	this.y;
	this.matrix;

	
	this.spawn = function()	 {
		//координаты
		while( true )	{
			x = Math.floor( Math.random() * poleX );
			y = Math.floor( Math.random() * poleY );
				if( free( x, y ) )		{
					this.x = x;
					this.y = y;
						break;
										}
						}
		//матрица
		this.matrix = [  ];
			for( i=0; i<poleX; i++ )		{
				this.matrix[ i ] = [  ];
					for( j=0; j<poleY; j++ )		{
						if( matrix[ i ][ j ] == 1 )		{ this.matrix[ i ][ j ] = -1; }
						else	{ this.matrix[ i ][ j ] = matrix[ i ][ j ]; }
													}
											}
		this.matrix[ this.x ][ this.y ] = 1;
							 }
			 
	this.spawn()
	
	this.walk = function()	{

		if( this.matrix[ this.x + 1 ][ this.y ] >= 0 && this.matrix[ this.x + 1 ][ this.y ] < poleX )		{
			if( this.matrix[ this.x + 1 ][ this.y ] < this.matrix[ this.x ][ this.y ] )		{
				this.matrix[ this.x ][ this.y ]++;
					this.x++;
				this.matrix[ this.x ][ this.y ]++;
																							
						return;
			}
																											}

							}
							
}






							