define([], function() {
    function drawRect(context) {
        context.strokeStyle = 'lightgrey';
        context.fillStyle = 'dimgrey';
        context.lineWidth = 5;
        context.rect(75, 50, context.canvas.width - 150, context.canvas.height - 100);
        context.stroke();
        context.fill();
    }

    function drawTitleText(context) {
        context.font = "34px Arial";
        context.strokeStyle ="#FF2222";
        context.fillStyle = '#FFAAAA';
        context.lineWidth = 0.75;
        context.textAlign = 'center';
        let msg = '2D Drawing';
        context.strokeText(msg, context.canvas.width/2, 100);
        context.fillText(msg, context.canvas.width/2, 100);
    }

    function drawFooterText(context) {
        let msg2 = "its quite easy";
        context.font = "24px Arial";
        context.strokeStyle ="#FF2222";
        context.fillStyle = '#FFAAAA';
        context.lineWidth = 0.75;
        context.fillText(msg2, context.canvas.width/2, 330);
        context.strokeText(msg2, context.canvas.width/2, 330);
    }

    function drawStickFigure(context) {
        context.strokeStyle = '#FFFFFF';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(200, 140, 20, 0, Math.PI * 2);
        context.moveTo(200, 160);
        context.lineTo(200, 220);
        context.moveTo(180, 300);
        context.lineTo(185, 260);
        context.lineTo(200, 220);
        context.lineTo(215, 260);
        context.lineTo(220, 300);
        context.moveTo(240, 130);
        context.lineTo(225, 170);
        context.lineTo(200, 170);
        context.lineTo(175, 180);
        context.lineTo(170, 220);
        context.stroke();
    }

    Banner = {
        drawBannerAndStickFigure: function drawBannerAndStickFigure(context) {
            drawRect(context);
            drawTitleText(context);
            drawFooterText(context);
            drawStickFigure(context);
        }
    }

    return Banner;
});
