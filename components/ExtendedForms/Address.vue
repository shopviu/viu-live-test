<template>
  <div class="extended-forms-address">
    <v-text-field
      v-model="userInput.address.country"
      label="Country"
      @change="onChange"
    />
    <v-text-field
      v-model="userInput.address.zip"
      label="Zip"
      @change="onChange"
    />
    <v-text-field
      v-model="userInput.address.city"
      label="City"
      @change="onChange"
    />
    <v-text-field
      v-model="userInput.address.street"
      label="Street"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { cloneDeep } from 'lodash';

@Component
export default class ExtendedFormsAddress extends Vue {
  @Prop({ type: Object, default: null })
  private value!: ExtendedFormData;

  private userInput = cloneDeep(this.value);

  private onChange(): void {
    this.$emit('input', this.userInput);
  }
}
</script>
