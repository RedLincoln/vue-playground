<template>
  <div>
      <input type="file" @change="emitValue"/>
      <div v-if="showErrors && !isValid" class="form--error">{{ message }}</div>
  </div>
</template>

<script>
import formValidation  from '../../mixins/formValidation';

export default {
     mixins: [
        formValidation
    ],

    methods: {
        emitValue(event){
            this.$emit('input', event.target.files[0])
        }
    }
}
</script>

<style>

</style>