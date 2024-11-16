<script setup lang="ts">
import { useTemplateRef, ref, reactive, onMounted } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator_bootstrap5.css'

// const table = ref(null);
const table = useTemplateRef('my-table')
const tabulator = ref(null);
const tableData = reactive([
  {"name": 'Arnulfo Hettinger', "progress": 57, "gender": "female", "rating": "5", "col": "violet", "dob": "16/10/2024"},
  {"name": 'Watson Greenholt', "progress": 86, "gender": "male", "rating": "5", "col": "yellow", "dob": "30/07/2024"},
  {"name": 'Adolphus Volkman', "progress": 43, "gender": "male", "rating": "4", "col": "indigo", "dob": "15/07/2024"},
  {"name": 'Hayley Spinka', "progress": 86, "gender": "female", "rating": "2", "col": "silver", "dob": "05/04/2024"}
]);

onMounted(() => {
  tabulator.value = new Tabulator(table.value, {
    data: tableData,
    reactiveData: true,
    columns: [
      {title:"Name", field:"name"},
      {title:"Progress", field:"progress", sorter:"number"},
      {title:"Gender", field:"gender"},
      {title:"Rating", field:"rating"},
      {title:"Favourite Color", field:"col"},
      {title:"Date Of Birth", field:"dob", hozAlign:"center"},
    ]
  })
})
</script>

<template>
  <div ref="my-table"></div>
</template>

