export default class IsTrue
{
    isValid(value){
        return typeof value === 'boolean' && value;
    }

    getErrorMessage() {
        return 'Campo obligatorio'
    }
}