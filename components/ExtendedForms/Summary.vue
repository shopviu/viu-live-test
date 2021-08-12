<template>
  <div class="extended-forms-summary">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>firstName</td><td>{{ value.firstName }}</td></tr>
          <tr><td>lastName</td><td>{{ value.lastName }}</td></tr>
          <tr><td>address.city</td><td>{{ value.address.city }}</td></tr>
          <tr><td>address.country</td><td>{{ value.address.country }}</td></tr>
          <tr><td>address.street</td><td>{{ value.address.street }}</td></tr>
          <tr><td>address.zip</td><td>{{ value.address.zip }}</td></tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExtendedFormsSummary extends Vue {
  @Prop({ type: Object, default: null })
  private value!: ExtendedFormData;
}
</script>
