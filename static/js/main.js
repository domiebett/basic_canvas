require.config({
    baseUrl: 'static/js/modules'
});

require([
    'grid',
    '2dStickFigure',
    'cosAndSin',
    'cosAndSinIllustration',
    'pacman',
    'ship'
],
function(
    Grid,
    Banner,
    CosAndSin,
    Illustration,
    Pacman,
    Ship){

    let gridContext = document.getElementById("grid").getContext("2d");
    let basicContext = document.getElementById("basic").getContext("2d");
    let cosSinContext = document.getElementById("cos_and_sin").getContext("2d");
    let illustrationContext = document.getElementById("illustration").getContext('2d');
    let pacmanContext = document.getElementById('pacman').getContext('2d');
    let randomPacmanContext = document.getElementById('random_pacman').getContext('2d');
    let uncontrolledShipContext = document.getElementById('uncontrolled_ship').getContext('2d');
    let controlledShipContext = document.getElementById('controlled_ship').getContext('2d');


    // Draw simple stick figure in banner
    Banner.drawBannerAndStickFigure(basicContext);

    // Draw grid and graphs
    Grid.draw(gridContext, 10);
    Grid.plotGraph(gridContext);
    Grid.plotMoreGraphs(gridContext);

    // Draw 'cosined' and 'sined' ( ;-) ) lines on a circle
    Grid.draw(illustrationContext);
    Illustration.draw(illustrationContext);
    CosAndSin.draw(cosSinContext);

    // Draw pacmans
    Pacman.draw(pacmanContext, 200, 200, 150, Math.random());
    Pacman.randomDraw(randomPacmanContext);

    // Translate and rotate ship
    Ship.rotateUncontrollably(uncontrolledShipContext);
    Ship.controlledRotations(controlledShipContext);
});
