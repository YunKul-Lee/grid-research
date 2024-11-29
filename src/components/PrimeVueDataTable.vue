<script setup lang="ts">
import { ref, onMounted } from 'vue'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

const products = ref()

const data = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24
  },
  {
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61
  },
  {
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2
  },
  {
    id: '1003',
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    quantity: 25
  },
  {
    id: '1004',
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    quantity: 73
  },
]

const value1 = ref(null);
const value2 = ref(null);

onMounted(() => {
  products.value = data
})

</script>

<template>
  <DataTable :value="products" showGridlines sortMode="multiple" removableSort :reorderableColumns="true" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
  </DataTable>
</template>


