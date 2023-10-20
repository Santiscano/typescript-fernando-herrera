
namespace Validations {

    export const validateText = ( text:string ):boolean => {
        return ( text.length > 3 ) ? true : false;
    }

    export const validateDate = ( mydate:Date ): boolean => {
        return ( isNaN(mydate.valueOf() ) )
            ? false
            : true;
    }

}

console.log( Validations.validateText( 'santi' ) )