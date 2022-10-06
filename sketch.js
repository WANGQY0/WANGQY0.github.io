// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker_zb;



function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('zb');

  //bound the texture to object
  let plane_1 = new Plane({
    x: 0,
    y: 0.1,
    z: 0,
    width: 1,
    height: 1,
    rotationX:-90,
    asset: 'pic_1',
    transparent:true,
  });
    console.log(plane_1);
  marker_zb = world.getMarker('zb');
  marker_zb.add( plane_1 );


 let plane_2 = new Plane({
    x: 0,
    y: 1,
    z: 0,
    width: 1,
    height: 1,
    rotationX:-90,
    asset: 'pic_2',
    transparent:true,
  });
    console.log(plane_2);
  marker_zb = world.getMarker('zb');
  marker_zb.add( plane_2 );




  // add the cube to our marker

}


