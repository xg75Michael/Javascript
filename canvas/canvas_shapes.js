let _UT = {
    basicFun: {
        clearArc(ctx, x, y, r) {
            ctx.beginPath();
            for (let ix = -r; ix < r; ix++) {
                for (let iy = -r; iy < r; iy++) {
                    if ((Math.pow(ix, 2) + Math.pow(iy, 2)) < Math.pow(r, 2)) {
                        ctx.clearRect(x + ix, y + iy, 1, 1);
                    }
                }
            }
        },
    },
    canvasShaps: {
        triangle(posX, posY, x1, y1, x2, y2, color) {
            try {
                this.beginPath();
                this.moveTo(posX, posY);
                this.lineTo(x1, y1);
                this.lineTo(x2, y2);
                this.fillStyle = color ? color : '#000';
                this.fill();
            } catch (e) {
                console.error('Arguments error?');
            }
        },
        roundRectQd(posX, posY, width, height, radius, color) {
            try {
                radius = Math.min(width, height) / 2 - radius > 0 ? radius : Math.min(width, height) / 2;
                let hw = width / 2;
                let lineWidth = hw - radius;
                this.beginPath();
                this.moveTo(posX, posY);
                this.lineTo(posX - lineWidth, posY);
                this.quadraticCurveTo(posX - hw, posY, posX - hw, posY + radius);
                this.lineTo(posX - hw, posY + height - radius);
                this.quadraticCurveTo(posX - hw, posY + height, posX - lineWidth, posY + height);
                this.lineTo(posX + lineWidth, posY + height);
                this.quadraticCurveTo(posX + hw, posY + height, posX + hw, posY + height - radius);
                this.lineTo(posX + hw, posY + radius);
                this.quadraticCurveTo(posX + hw, posY, posX + lineWidth, posY);
                this.lineTo(posX, posY);
                this.fillStyle = color ? color : '#000';
                this.fill();
            } catch (e) {
                console.error('Arguments error?');
            }
        },
        regularPolygon(posX, posY, r, numbs, offAng, color) {
            offAng = offAng + 90;
            this.beginPath();
            for (let i = 0; i < numbs; i++) {
                let difX = Math.cos(2 * Math.PI / 360 * (360 / numbs * i + offAng)) * r;
                let difY = Math.sin(2 * Math.PI / 360 * (360 / numbs * i + offAng)) * r;
                this.lineTo(posX - difX, posY - difY);
            }
            this.fillStyle = color ? color : '#000';
            this.fill();
        },
        // 多边形 带角
        pointPolygon(posX, posY, r1, r2, numbs, offAng, color) {
            offAng = offAng + 90;
            let divAng = 360 / numbs / 2;
            this.beginPath();
            for (let i = 0; i < numbs * 2; i++) {
                let perX = Math.cos(2 * Math.PI / 360 * (divAng * i + offAng));
                let preY = Math.sin(2 * Math.PI / 360 * (divAng * i + offAng));
                i % 2 === 0 ?
                    this.lineTo(posX - perX * r1, posY - preY * r1) :
                    this.lineTo(posX - perX * r2, posY - preY * r2);
            }
            this.fillStyle = color ? color : '#000';
            this.fill();
        },
        // 月亮
        hollowMoon(posX, posY, r1, r2, offset, color1, offAng) {
            offAng = offAng ? offAng : 0;
            let radius = 2 * Math.PI / 360 * offAng
            let offsetX = Math.cos(radius) * offset;
            let offsetY = Math.sin(radius) * offset;
            this.beginPath();
            this.arc(posX, posY, r1, 0, Math.PI * 2);
            this.fillStyle = color1;
            this.fill();
            // 清理不干净？ 在 offAng 不等于0的时候
            _UT.basicFun.clearArc(this, posX + offsetX, posY + offsetY, r2);
        },
    },
    drawLines: {
        multiRect(posX, posY, w, h, numbs, color) {
            let times = numbs * 4;
            let difAng = 360 / times * Math.PI / 180;
            this.strokeStyle = color;
            this.translate(posX, posY);
            for (let i = 0; i < numbs; i++) {
                this.rotate(difAng);
                this.rect(-w / 2, -h / 2, w, h);
                this.stroke();
            }
            // Reset 原点
            for (let i = 0; i < numbs; i++) {
                this.rotate(-difAng);
            }
            this.translate(-posX, -posY);
        },
        regularLines(posX, posY, r, numbs, offAng, color) {
            this.beginPath();
            for (let i = 0; i <= numbs; i++) {
                let difX = Math.cos(2 * Math.PI / 360 * (360 / numbs * i + offAng)) * r;
                let difY = Math.sin(2 * Math.PI / 360 * (360 / numbs * i + offAng)) * r;
                this.lineTo(posX - difX, posY - difY);
            }
            this.strokeStyle = color ? color : '#000';
            this.stroke();
        },
        commonIcons() {
            this.beginPath();
            switch (arguments[0]) {
                case 'angleBrackets':
                    console.info('arrow');
                    // this.moveTo(arguments[1], arguments[2]);
                    this.moveTo(arguments[1] + arguments[3] / 2, arguments[2] + arguments[3] / 2 * 1.4);
                    this.lineTo(arguments[1], arguments[2]);
                    this.lineTo(arguments[1] + arguments[3] / 2, arguments[2] - arguments[3] / 2 * 1.4);
                    this.lineWidth = Math.abs(arguments[3] / 5);
                    this.lineCap = 'round';
                    this.stroke();
                    break;
                case 'arrow':
                    console.info('arrow');
                    // this.moveTo(arguments[1], arguments[2]);
                    this.moveTo(arguments[1] + arguments[3] / 2, arguments[2] + arguments[3] / 2 * 1.4);
                    this.lineTo(arguments[1], arguments[2]);
                    this.lineTo(arguments[1] + arguments[3] / 2, arguments[2] - arguments[3] / 2 * 1.4);
                    this.lineWidth = Math.abs(arguments[3] / 5);
                    this.lineCap = 'round';
                    this.stroke();
                    break;
                default:
                    console.info('No this type of Icons');
                    break;
            }
        }
        //// more .stroke 方法
    },
};