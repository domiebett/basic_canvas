define([], function() {
    Ship = {
        draw: function(ctx, radius, options) {
            options = options || {};
            ctx.save();

            if (options.guide) {
                ctx.strokeStyle = "white";
                ctx.fillStyle = "rgba(0, 0, 0, 0.25";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }

            ctx.lineWidth = options.lineWidth || 2;
            ctx.strokeStyle = options.stroke || "white";
            ctx.fillStyle = options.fill || "black";
            
            let angle = (options.angle || 0.5 * Math.PI)/2;

            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(
                Math.cos(Math.PI - angle) * radius,
                Math.sin(Math.PI - angle) * radius
            );
            ctx.lineTo(
                Math.cos(Math.PI + angle) * radius,
                Math.sin(Math.PI + angle) * radius
            );
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        },
        rotateUncontrollably: function(ctx) {
            ctx.save();
            let t = ctx.canvas.width / 20;
            let r = Math.PI / 500;
            ctx.translate(0, 5);
            for (let i = 0; i < 50; i++) {
                ctx.rotate(i * r);
                this.draw(ctx, t, {guide: true, lineWidth: 1});
                ctx.translate(t, 0);
            }
            ctx.restore();
        },
        controlledRotations: function(ctx) {
            let x, y, angle = 0;
            let w = ctx.canvas.width, h = ctx.canvas.height;

            for (y = h/20; y < h; y += h/10) {
                for(x = w/20; x < w; x += w/10) {
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(angle);
                    this.draw(ctx, w/30, {guide: true, lineWidth: 1});
                    ctx.restore();
                    angle = (angle + 0.0075 * Math.PI);
                }
            }
        }
    }

    return Ship;
});
