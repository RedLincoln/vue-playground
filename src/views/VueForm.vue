<template>
  <div>
      <BaseForm lazyValidation @submit="onSubmit">
        <BaseInput v-model="fields.name.value" :rules="fields.name.rules" :customMessage="fields.name.customMessage"></BaseInput>
        <BaseTextarea v-model="fields.aboutYou.value" :rules="fields.aboutYou.rules"></BaseTextarea>
        <div>
            <BaseInput v-model="fields.lopd.value" :rules="fields.lopd.rules" type="checkbox"></BaseInput>
        </div>
        <vue-input-file v-model="fields.file.value" :rules="fields.file.rules"></vue-input-file>
      </BaseForm>
  </div>
</template>

<script>
import BaseInput from '../components/form/BaseInput';
import BaseTextarea from '../components/form/BaseTextarea';
import NotBlank from '../constraints/NotBlank';
import IsTrue from '../constraints/IsTrue';
import BaseForm from '../components/form/BaseForm';
import NotNull from '../constraints/NotNull';
import VueInputFile from '../components/form/VueInputFile.vue';

export default {
    name: 'vue-form',

    components: {
        BaseInput,
        BaseTextarea,
        BaseForm,
        VueInputFile
    },

    data() {
        return {
            fields: {
                name: { value: '', rules: [new NotBlank()], customMessage: "Server Error" },
                aboutYou: { value: '', rules: [new NotBlank()], customMessage: '' },
                lopd: { value: false, rules: [new IsTrue()] },
                file: { value: undefined, rules: [new NotNull()]}
            }
        }
    },

    methods: {
        onSubmit(isValid) {
            console.log(isValid)
        }
    }
}
</script>

<style>

</style>