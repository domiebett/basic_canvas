define([], function() {
    Pacman = {
        /**
         * Draws pacman at dynamic position with dynamic width of open mouth
         * 
         * @param context - The canvas context
         * @param x - x coordinate for the center of the arc.
         * @param y - y coordinate for the center of the arc.
         * @param radius - radius of the arc
         * @param mouth - value between 0 and 1 for how open the mouth should be
         */
        draw: function (context, x, y, radius, mouth) {
            x = x || 200;
            y = y || 200;
            radius = radius || 150;

            if (mouth > 1 || mouth === null) {
                mouth = 1;
            } else if (mouth < 0) {
                mouth = 0;
            }

            let xMouthOffset = 0.2 * mouth,
                yMouthOffset = 1.8 + (0.2 - (0.2 * mouth));

            context.save();

            context.beginPath();
            context.arc(x, y, radius, xMouthOffset * Math.PI, yMouthOffset * Math.PI);
            context.lineTo(x, y);
            context.closePath();

            context.stroke();
            context.fillStyle = "yellow";
            context.fill();

            context.restore();
        },

        randomDraw: function(context) {
            var min_radius = 5; var max_radius = 50;
    
            do {
                let x = context.canvas.width * Math.random();
                let y = context.canvas.height * Math.random();
                let radius = min_radius + (max_radius - min_radius) * Math.random();

                this.draw(context, x, y, radius, Math.random());

            } while(Math.random() < 0.9);
        }
    }

    return Pacman;
})
