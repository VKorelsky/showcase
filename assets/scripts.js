document.addEventListener('DOMContentLoaded', function() {
   var canvas = document.getElementById('world');
   var engine = Matter.Engine.create();
   var world = engine.world;

   var render = Matter.Render.create({
       canvas: canvas,
       engine: engine,
       options: {
         width: window.innerWidth,
         height: window.innerHeight,
         background: 'transparent',
         wireframes: false,
         showAngleIndicator: false
       }
   })
});
