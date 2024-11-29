<script setup>
import { ref } from 'vue';

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext'

const value1 = ref(null);
const value2 = ref(null);
</script>

<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value1" placeholder="Search" />
    </IconField>

    <IconField>
      <InputText v-model="value2" variant="filled" />
      <InputIcon class="pi pi-spin pi-spinner" />
    </IconField>
  </div>
</template>

