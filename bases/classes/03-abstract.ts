(()=> {
    // una clase abstracta es para crear otras clases no se instancia
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }


    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    // aqui uso la clase abstract para asegurar que un argumento sea de dicho tipo y contenga la informacion
    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    printName( magneto );

})()