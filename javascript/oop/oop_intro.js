//const navColor = new Color('carrot', [230, 126, 34])
//const logoColor = new Color('emerald', [46, 204, 113])

//"rgb(244,54,23)"
//"rgba(244,54,23,0.9)"
//"#54FF32"
//"hsl(180,50%,30%)"

//function hex(r, g, b) {
//    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//}
//function rgb(r, g, b) {
//    return `rgb(${r},${g},${b})`
//}
//hex(255, 100, 25)

//function makeColor(r, g, b) {
//    const color = {};
//    color.r = r
//    color.g = g
//    color.b = b
//    color.rgb = function () {
//        const { r, g, b } = this
//        return `rgb(${r},${g},${b})`
//    }
//    color.hex = function () {
//        const { r, g, b } = this
//        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//    }
//    return color
//}

//function Color(r, g, b) {
//    this.r = r
//    this.g = g
//    this.b = b
//
//}
//Color.prototype.rgb = function () {
//    const { r, g, b } = this
//    return `rgb(${r},${g},${b})`
//}
//Color.prototype.hex = function () {
//    const { r, g, b } = this
//    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//}
//Color.prototype.rgba = function (a = 1.0) {
//    const { r, g, b } = this
//    return `rgba(${r},${g},${b},${a})`
//}
//
//const color1 = new Color(255, 40, 100)
//const color2 = new Color(0, 0, 0)
//
//color1.hex()
//color2.hex()
//color1.rgba(0.5) 

//class Color {
//    constructor(r, g, b, name) {
//        this.r = r;
//        this.g = g;
//        this.b = b;
//        this.name = name;
//    }
//    innerRGB() {
//        const { r, g, b } = this
//        return `${r},${g},${b}`
//    }
//    greet() {
//        return `HELLO FROM ${this.name}!!!`
//    }
//    rgb() {
//        return `rgb(${this.innerRGB()})`
//    }
//    rgba(a = 1.0) {
//        return `rgb(${this.innerRGB()},${a})`
//    }
//    hex() {
//        const { r, g, b } = this
//        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//    }
//}
//
//const c1 = new Color(255, 67, 89, 'tomato')
//const white = new Color(255, 255, 255, 'white')



class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`
    }
}



class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return `meow`
    }
}

class Dog extends Pet {
    bark() {
        return 'wolf'
    }
    eat() {
        return `${this.name} barks and eats`
    }
}