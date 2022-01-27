<template>
  <div>
    <template v-for="field in fields">
      <component
        v-if="getFieldComponent(field.type)"
        :is="getFieldComponent(field.type)"
        :key="field.key"
        v-bind="field"
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
      formData: this.formData,
    }
  },
  methods: {
    getFieldComponent,
    setFieldValue(name, val) {
      this.$set(this.formData, name, val)
    }
  }
}
</script>
