define([], function() {
    Illustration = {
        draw: function(context) {
            let x = 200,
                y = 200,
                radius = 130,
                offset = 30,
                angle = (Math.PI / 3);


            context.save();

            // Draw circle
            context.lineWidth = 4;
            context.strokeStyle = "#000000";
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.stroke();

            // Vertical and horizontal offseted radiuses.
            context.lineWidth = 2;
            context.strokeStyle = "dimgrey";
            context.beginPath();
            context.moveTo(x, y - (radius + offset));
            context.lineTo(x, y + (radius + offset));
            context.moveTo(x - (radius + offset), y);
            context.lineTo(x + (radius + offset), y);
            context.stroke();

            // Draw angle arc.
            context.strokeStyle = "#000000";
            context.lineWidth = 3;
            context.beginPath();
            context.arc(x, y, 20, 0, angle);
            context.stroke();

            // Draw angle line
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(
                x + Math.cos(angle) * radius,
                y + Math.sin(angle) * radius
            )
            context.stroke();

            // Draw red cos indicator
            context.strokeStyle = "red";
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(
                x + Math.cos(angle) * radius,
                y
            )
            context.stroke();

            // Draw red cos limit
            context.lineWidth = 0.5;
            context.lineStyle = "dotted";
            context.beginPath();
            context.moveTo(
                x + Math.cos(angle) * radius,
                y - (radius + offset)
            );
            context.lineTo(
                x + Math.cos(angle) * radius,
                y + (radius + offset)
            );
            context.stroke();

            // Label red cos indicator
            context.fillStyle = 'dimgrey';
            context.fillText('r x Math.cos(angle)', x + 10, y - 10);
            context.fill();
            
            context.restore();

            // Draw blue sin indicator
            context.strokeStyle = "blue";
            context.lineWidth = 3;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(
                x, y + Math.sin(angle) * radius
            );
            context.stroke();

            // Draw blue sin limit
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(
                x - (radius + offset),
                y + Math.sin(angle) * radius
            );
            context.lineTo(
                x + (radius + offset),
                y + Math.sin(angle) * radius
            )
            context.stroke();

            // Label blue sin indicator
            context.textAlign = "right";
            context.fillText('r x Math.sin(angle)',
                x - 10,
                y + (Math.sin(angle) * radius) / 2
            );
            context.fill();

            context.textAlign = "left";
            context.fillText('radius, r', 130, 150);
        }
    }

    return Illustration;
});
