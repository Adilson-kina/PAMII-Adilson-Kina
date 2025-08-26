class Carro{
    marca: string;

    constructor(marca: string){
        this.marca = marca;
    }
}

const carro1 = new Carro('Toyota');
const carro2 = new Carro('Honda');

console.log(carro1.marca);
console.log(carro2.marca);