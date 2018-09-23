define([], function() {
    Grid = {
        /**
         * @param ctx - canvas context
         * @param minor - pixels of minor grids squares
         * @param major - pixels of major grid squares
         * @param stroke - stroke style
         * @param fill - fill style
         */
        draw: function (ctx, minor, major, stroke, fill) {
            minor = minor || 10;
            major = major || minor * 5;
            stroke = stroke || "#00FF00";
            fill = fill || "#009900";
            ctx.save();
            ctx.font = "12px Arial";
            ctx.textAlign = "left";
            ctx.strokeStyle = stroke;
            ctx.fillStyle = fill;
            let width = ctx.canvas.width, height = ctx.canvas.height;

            for (var x = 0; x < width; x += minor) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.lineWidth = (x % major == 0) ? 0.5 : 0.25;
                ctx.stroke();
                if (x % major == 0) {
                    ctx.fillText(x, x, 10);
                }
            }
            for (let y = 0; y < height; y += minor) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.lineWidth = (y % major == 0) ? 0.5 : 0.25;
                ctx.stroke();
                if (y % major == 0) {
                    ctx.fillText(y, 0, y + 10);
                }
            }
            ctx.restore();
        },
        plotGraph: function (context) {
            context.save();
            context.beginPath();
            context.strokeStyle = "#FFFFFF";
            context.fillStyle = "#00FF00";
            context.lineWidth = 2;

            context.moveTo(50, 50);
            context.lineTo(150, 250);
            context.lineTo(250, 170);
            context.lineTo(320, 280);


            // Closes an open path if you draw an L, it makes it a
            // triangle(hypotenus) by closing it with an \
            context.closePath();
            context.stroke();

             // Files the shape with the shortest line from the beginning
            // to the end.
            context.fill();

            context.moveTo(50, 50);
            context.bezierCurveTo(0, 0, 80, 250, 150, 250);
            context.bezierCurveTo(250, 250, 250, 250, 250, 170);
            context.bezierCurveTo(250, 50, 400, 350, 320, 280);
            context.closePath();

            context.stroke();

            context.fillText("(50, 50)", 30, 40);
            context.fillText("(150, 250)", 130, 260);
            context.fillText("(250, 170)", 255, 175);
            context.fillText("320, 280", 325, 285);

            context.restore();
        },
        plotMoreGraphs: function (context) {
            context.save();
            
            context.beginPath()
            context.moveTo(50, 250);
            context.quadraticCurveTo(25, 300, 50, 350);
            context.quadraticCurveTo(100, 375, 150, 350);
            context.closePath();

            context.moveTo(230, 360);
            context.quadraticCurveTo(255, 340, 270, 360);
            context.quadraticCurveTo(255, 340, 270, 310);
            context.closePath();

            context.moveTo(250, 50);
            context.quadraticCurveTo(310, 60, 370, 50);
            context.quadraticCurveTo(400, 75, 370, 100);
            context.closePath();

            context.strokeStyle = "#FFFF00";
            context.fillStyle = "#000000";

            context.fill();
            context.stroke();

            context.restore();
        }
    }

    return Grid;
});
