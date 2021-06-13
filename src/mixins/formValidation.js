const mixin = {
    inject: ["form"],
    props: {
        value: {
            required: true
        },
        rules: {
            type: Array,
            default: () => []
        },
        customMessage: {
            type: String,
            default: ''
        }
    },

    data(){
        return {
            showErrors: false
        }
    },

    mounted(){
        this.form.register(this)
    },

    computed: {
        message() {
            return this.customMessage.trim().length > 0 ? this.customMessage : this.getFirstFailRuleMessage()
        },

        isValid(){
            return this.rules.every(rule => rule.isValid(this.value))
        }
    },

    methods: {
        getFirstFailRuleMessage() {
            const firstFailRule = this.rules.find(rule => !rule.isValid());
            return firstFailRule ? firstFailRule.getErrorMessage() : this.customMessage;
        },

        emitValue(event){
            switch (event.target.type){
                case 'checkbox':
                    this.$emit('input', event.target.checked)
                    break;
                default:
                    this.$emit('input', event.target.value)
                    break;
            }
        },

        reset() {
            this.$emit('input', this.defaultValue);
        },

        showValidationErrors() {
            this.showErrors = true;
        }

    },


    
}

export default mixin;

