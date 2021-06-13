<template>
  <div>
      <textarea :value="value" @input="emitValue"></textarea>
      <div v-if="showErrors && !isValid" class="form--error">{{ message }}</div>
  </div>
</template>

<script>
import formValidation  from '../../mixins/formValidation';

export default {
    name: 'base-textarea',

    mixins: [
        formValidation
    ]
}
</script>

<style>

</style>