<template>
  <div>
      <input :type="type" :value="value" @input="emitValue"> 
      <div v-if="showErrors && !isValid" class="form--error">{{ message }}</div>
  </div>
</template>

<script>
import formValidation  from '../../mixins/formValidation';

export default {
    name: 'base-input',

    mixins: [
        formValidation
    ],

    props: {
        type: {
            type: String,
            default: 'text'
        }
    },

    computed: {
        defaultValue() {
            return this.type === 'checkbox' ?  undefined : ''
        }
    }
}
</script>

<style>

</style>