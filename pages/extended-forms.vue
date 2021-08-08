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
          {{ step.slug }}
          <v-card>
            <v-card-actions>
              <v-btn
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

interface ExtendedFormData {
  firstName: string | null;
  lastName: string | null;
  address: {
    city: string | null;
    country: string | null;
    street: string | null;
    zip: string | null;
  };
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
  ];

  private userInput: ExtendedFormData = {
    firstName: null,
    lastName: null,
    address: {
      city: null,
      country: null,
      street: null,
      zip: null,
    },
  };

  private onNext() {
    this.currentStep += 1;
    if (this.currentStep > this.steps.length) {
      this.currentStep = 1;
    }
  }
}
</script>
