<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col cols="10">
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step
            v-for="(step, index) in steps"
            :key="`step-header-${index}`"
            :complete="currentStep > index + 1"
            :step="index + 1"
          >
            {{ step.headline }}
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-content
          v-for="(step, index) in steps"
          :key="`step-content-${index}`"
          :step="index + 1"
        >
          <div class="component-name">
            Component: <code>ExtendedForms/{{ `${step.slug[0].toUpperCase()}${step.slug.substring(1)}` }}.vue</code>
          </div>
          <component
            :is="`extended-forms-${step.slug}`"
            v-model="userInput"
          />
          <v-card>
            <v-card-actions>
              <v-btn
                v-if="currentStep > 1"
                color="secondary"
                @click="onPrev"
              >
                Previous
              </v-btn>
              <v-spacer />
              <v-btn
                v-if="currentStep < steps.length"
                color="primary"
                @click="onNext"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface ExtendedFormStep {
  slug: string;
  headline?: string;
}

@Component
export default class PagesExtendedForms extends Vue {
  private currentStep = 1;

  private steps: ExtendedFormStep[] = [
    {
      slug: 'info',
      headline: 'Information',
    },
    {
      slug: 'personal',
      headline: 'Personal',
    },
    {
      slug: 'address',
      headline: 'Address',
    },
    {
      slug: 'summary',
      headline: 'Summary',
    },
  ];

  private userInput: ExtendedFormData = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
      city: 'Placeholderburg',
      country: 'Samplestan',
      street: 'Example Street 123',
      zip: '54321',
    },
  };

  private onNext() {
    this.currentStep += 1;
    if (this.currentStep > this.steps.length) {
      this.currentStep = 1;
    }
  }

  private onPrev() {
    this.currentStep -= 1;
    if (this.currentStep < 1) {
      this.currentStep = this.steps.length;
    }
  }
}
</script>

<style scoped>
.component-name {
  margin-bottom: 2em;
}
</style>
