<template>
  <div>
    <template v-for="field in fields">
      <component
        v-if="getFieldComponent(field.type)"
        :is="getFieldComponent(field.type)"
        :key="field.key"
        v-bind="field"
        :value="getFieldValue(field.name)"
        @input="setFieldValue"
      />
    </template>
  </div>
</template>

<script>
import FIELDS from './fields'
import { getFieldComponent } from '@/comp';

export default {
  data() {
    return {
      fields: FIELDS[0].fields,
      formData: {},
    };
  },
  provide() {
    return {
      formData: () => this.formData,
    }
  },
  methods: {
    getFieldComponent,
    getFieldValue(name) {
      return this.formData[name]
    },
    setFieldValue(name, val) {
      this.$set(this.formData, name, val)
    }
  }
}
</script>
