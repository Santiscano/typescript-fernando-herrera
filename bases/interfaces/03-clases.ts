(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number;
    }

    // implements es para interfaces y forza a que tenga los metodos y propiedades de las interfaces
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }

})()