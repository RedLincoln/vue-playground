export default class NotBlank
{
    isValid(value){
        return typeof value !== 'undefined';
    }

    getErrorMessage() {
        return 'Campo obligatorio'
    }
}