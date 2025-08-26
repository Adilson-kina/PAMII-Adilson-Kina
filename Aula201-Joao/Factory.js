var SUV = /** @class */ (function () {
    function SUV() {
    }
    SUV.prototype.dirigir = function () {
        console.log('Dirigindo um SUV');
    };
    return SUV;
}());
var Esportivo = /** @class */ (function () {
    function Esportivo() {
    }
    Esportivo.prototype.dirigir = function () {
        console.log('Dirigindo um Esportivo');
    };
    return Esportivo;
}());
var Sedan = /** @class */ (function () {
    function Sedan() {
    }
    Sedan.prototype.dirigir = function () {
        console.log('Dirigindo um Sedan');
    };
    return Sedan;
}());
var Montadora = /** @class */ (function () {
    function Montadora() {
    }
    Montadora.fabricarCarro = function (tipo) {
        switch (tipo) {
            case 'SUV': {
                return new SUV();
                break;
            }
            case 'Esportivo': {
                return new Esportivo();
                break;
            }
            case 'Sedan': {
                return new Sedan();
                break;
            }
            default: {
                throw new Error('Tipo de carro desconhecido');
                break;
            }
        }
    };
    return Montadora;
}());
var mewCarro = Montadora.fabricarCarro('Esportivo');
mewCarro.dirigir();
