<script setup>
import { ref, markRaw } from 'vue'

import { SchemaForm, SchemaFormFactory, useSchemaForm } from 'formvuelate'
import VeeValidatePlugin from '@formvuelate/plugin-vee-validate'
//import FormFieldsTitlePlugin from '@/plugins/formFieldsTitle'

import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseButton from '@/components/BaseButton.vue'

const SchemaFormWithValidation = SchemaFormFactory([VeeValidatePlugin()])

const schema = ref([
  {
    model: 'user',
    component: markRaw(SchemaForm),
    class: 'mx-auto w-1/2 mb-12',
    schema: [
      {
        component: markRaw(BaseInput),
        default: 'Clement',
        label: 'Firstname',
        model: 'firstname',
        validations: 'required',
        ariaLabel: 'input text description',
      },
      {
        component: markRaw(BaseInput),
        default: 'Corneto',
        label: 'Email',
        model: 'email',
        validations: 'required|email',
      },
      {
        model: 'civility',
        component: markRaw(BaseSelect),
        default: 'mr',
        label: 'Civility',
        options: ['mr', 'ms', 'unknow'],
        validations: 'required',
      },
    ],
  },
  {
    model: 'company',
    component: markRaw(SchemaForm),
    class: 'mx-auto w-1/2 mb-12',
    schema: [
      {
        component: markRaw(BaseInput),
        label: 'Company Name',
        model: 'companyName',
      },
      {
        component: markRaw(BaseInput),
        label: 'Company Address',
        model: 'companyAddress',
      },
      {
        component: markRaw(BaseInput),
        label: 'Company Phone',
        model: 'companyPhone',
        validations: 'required|numeric',
      },
      {
        component: markRaw(BaseSelect),
        label: 'Number of employees',
        default: '1',
        model: 'companyEmployees',
        options: ['1', '2', '3', '4+'],
      },
    ],
  },
])

const formData = ref({})
useSchemaForm(formData)

const onReset = () => {
  formData.value = {}
}

const onSubmit = () => {
  console.log('payload :', formData)
}
</script>

<template>
  <div class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Ready to build form ?
        <br />
        <span class="text-2xl text-indigo-600">
          Vue 3 + FormVueLate + Vee validate
        </span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/playground"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none"
          >
            Playground 🎠
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full mt-6">
    <h2 class="text-lg font-semibold text-center text-indigo-600">
      Form example :
    </h2>
    <schema-form-with-validation :schema="schema" @submit="onSubmit">
      <template #afterForm>
        <div class="flex justify-end w-1/2 gap-4">
          <base-button
            @click="onReset"
            class="text-center"
            text="reset"
            type="button"
          />
          <base-button class="text-center" type="submit" text="submit" />
        </div>
      </template>
    </schema-form-with-validation>
    <pre>{{ formData }}</pre>
  </div>
</template>
