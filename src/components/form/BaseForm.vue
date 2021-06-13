<template>
  <div>
      <form>
        <slot></slot>
        <button @click="onSubmit" type="submit">{{ submitText }}</button>
        <button @click="reset">{{ resetText }}</button>
      </form>
  </div>
</template>

<script>
export default {
    props: {
        lazyValidation: {
            type: Boolean,
            default: true
        },
        submitText: {
            type:String,
            default: 'Enviar'
        },
        resetText: {
            type: String,
            default: 'Reset'
        }
    },

    data() {
        return {
            inputs: []
        }
    },


    mounted() {
        if (!this.lazyValidation){
            this._showErrors();
        }
    },

    computed: {
        isValid() {
            return this.inputs.every(input => input.isValid)
        }
    },

    provide: function (){
        return {
            form: this
        }
    },

    methods: {
        register(input) {
            this.inputs.push(input);
        },

        reset() {
            this.inputs.forEach(input => {
                input.reset()
            })
        },  

        onSubmit(event) {
            event.preventDefault();
            this._showErrors()
            this.$emit('submit', this.isValid)
        },

        _showErrors() {
            this.inputs.forEach(input => {
                input.showValidationErrors();
            })
        }
    }
}
</script>

<style>

</style>