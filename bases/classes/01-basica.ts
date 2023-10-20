(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;  // se pueden consumir haciendo referencia a la clase no a la instancia
        static getAvgAge() {
            return this.name;
        }

        // forma comun
        // constructor(name:string, team: string, realName?: string){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }
        // forma simplificada
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio() {
            return `${ this.name } (${ this.team })!!!`
        }


    }


    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log( antman.bio() )

    console.log( Avenger.getAvgAge() )

})()