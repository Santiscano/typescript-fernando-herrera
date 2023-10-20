(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName }`
        }

    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super( name, realName )
            console.log('Constructor Xmen llamado');
        }

        // los getter y setter se ven como propiedad en la instancia, pero se crean como metodos
        // los getter siempre deben retornar algo
        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        // los setter siempre reciben un valor y establecen algo - no retornan
        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('EL nombre debe de ser mayor de 3 letras')
            }

            this.name = name;
        }


        getFullnameDesdeXmen() {
            console.log( super.getFullname()  )
        }

    }


    const wolverine = new Xmen('Wolverine','Logan', true)

    // estoy llamando el setter
    wolverine.fullName = 'Fercho';
    // estoy llamando el getter
    console.log(wolverine.fullName );
    
    wolverine.getFullnameDesdeXmen();


})()