<template>
  <div class="extended-forms-personal">
    <v-text-field
      v-model="value.firstName"
      label="First Name"
    />
    <v-text-field
      v-model="value.lastName"
      label="Last Name"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExtendedFormsPersonal extends Vue {
  @Prop({ type: Object, default: null })
  private value!: ExtendedFormData;
}
</script>
