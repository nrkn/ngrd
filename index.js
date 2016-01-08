'use strict'

const ObjectFactory = require( 'nof' )
const geometry = require( 'ngeom' )

const { Size, Point } = geometry

const GridFactory = ObjectFactory({
  name: 'Grid',
  properties: [ 'size', 'data' ]
})
  
const Grid = gridSize => {
  const data = {}    
  const points = []
  
  const size = Size.from( gridSize )
  
  for( let y = 0; y < size.height; y++ ){
    for( let x = 0; x < size.width; x++ ){
      points.push( Point( x, y ) )
    }
  }
  
  const grid = Object.assign(
    GridFactory( size, data ),
    {
      at: ( point, value ) => {
        const key = Point.from( point ).toString()
        
        if( value !== undefined ){
          data[ key ] = value
        }
        
        return data[ key ]
      },
      points: () => points.slice()
    }
  )
  
  return grid
}

module.exports = Grid
