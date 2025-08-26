var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.marca = marca;
    }
    return Carro;
}());
var carro1 = new Carro('Toyota');
var carro2 = new Carro('Honda');
console.log(carro1.marca);
console.log(carro2.marca);
