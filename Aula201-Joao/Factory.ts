interface Carro {
    dirigir(): void;
}

class SUV implements Carro {
    dirigir(): void {
        console.log('Dirigindo um SUV');
    }
}

class Esportivo implements Carro {
    dirigir(): void {
        console.log('Dirigindo um Esportivo');
    }
}

class Sedan implements Carro {
    dirigir(): void {
        console.log('Dirigindo um Sedan');
    }
}

class Montadora{
    static fabricarCarro(tipo: string): Carro{
        switch(tipo){
            case 'SUV':{
                return new SUV();
                break;
            }
            case 'Esportivo':{
                return new Esportivo();
                break;
            }
            case 'Sedan':{
                return new Sedan();
                break;
            }
            default:{
                throw new Error('Tipo de carro desconhecido');
                break;
            }
        }
    }
}

const mewCarro = Montadora.fabricarCarro('Esportivo');
mewCarro.dirigir();