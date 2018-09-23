define([], function() {
    CosAndSin = {
        /**
         * Draws iscosceles triangle touching circles circumfrence.
         * 
         * @param context - canvas context
         * @param x - x coordinate for center of the circle
         * @param y - y coordinate for center of the circle
         * @param radius - radius of the circle
         * @param angle - radians angle of the point triangle edges should touch.
         */
        draw: function(context, x, y, radius, angle) {
            context.save();

            x = x || 200;
            y = y || 200;
            radius = radius || 100;
            angle = angle || Math.PI / 4;

            context.lineWidth = 0.5;
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);

            context.strokeStyle = "#FFFFFF";
            context.fillStyle = "rgba(0, 25, 255, 0.25)";
            context.stroke();
            context.fill();

            context.lineWidth = 2;
            context.fillStyle = "black";
            context.beginPath();
            context.moveTo(
                x, y - radius
            );

            context.lineTo(
                x + Math.cos(angle) * radius,
                y + Math.sin(angle) * radius
            );

            context.lineTo(
                x - Math.cos(angle) * radius,
                y + Math.sin(angle) * radius
            )

            context.closePath();

            context.stroke();


            context.restore();
        }
    }

    return CosAndSin;
});
