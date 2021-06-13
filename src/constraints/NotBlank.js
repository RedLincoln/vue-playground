export default class NotBlank
{
    isValid(value){
        return typeof value === 'string' && value.trim().length > 0;
    }

    getErrorMessage() {
        return 'Campo obligatorio'
    }
}