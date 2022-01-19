class classRectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        let P = (this.width + this.height) * 2;
        return P;
    }

    getArea() {
        let S = this.width * this.height;
        return S;
    }

    drawRectangle() {
        let ctx = document.getElementById("rectangle").getContext("2d");
        ctx.fillStyle = "#c726c2";
        ctx.fillRect(0, 0, this.width, this.height);
    }
}

let firstRectangle = new classRectangle(50, 70);
firstRectangle.drawRectangle();
document.write("Perimeter is: " + firstRectangle.getPerimeter() + "<br>");
document.write("The Area is: " + firstRectangle.getArea());