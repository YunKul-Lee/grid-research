<script setup lang="ts">
import { useTemplateRef, ref, reactive, onMounted } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.css'

// 샘플 데이터
const data1 = [
  {"name": 'Arnulfo Hettinger', "progress": 57, "gender": "female", "rating": "5", "col": "violet", "dob": "16/10/2024"},
  {"name": 'Watson Greenholt', "progress": 86, "gender": "male", "rating": "5", "col": "yellow", "dob": "30/07/2024"},
  {"name": 'Adolphus Volkman', "progress": 43, "gender": "male", "rating": "4", "col": "indigo", "dob": "15/07/2024"},
  {"name": 'Hayley Spinka', "progress": 86, "gender": "female", "rating": "2", "col": "silver", "dob": "05/04/2024"},
  {"name": 'Yvette Walker', "progress": 67, "gender": "female", "rating": "5", "col": "azure", "dob": "03/01/2024"},
  {"name": 'Keagan Davis', "progress": 64, "gender": "male", "rating": "5", "col": "ivory", "dob": "19/06/2024"},
  {"name": 'Anastasia Towne', "progress": 3, "gender": "female", "rating": "1", "col": "lavender", "dob": "12/05/2024"},
  {"name": 'Dr. Serena White', "progress": 32, "gender": "female", "rating": "5", "col": "violet", "dob": "14/04/2024"},
  {"name": 'Casper Gottlieb', "progress": 38, "gender": "female", "rating": "2", "col": "yellow", "dob": "10/06/2024"}
]

// const table = ref(null);
const basicTable = useTemplateRef('basic-table')
const basicTabulator = ref(null);
const basicTableData = reactive([...data1]);

const printIcon = function(cell: object, formatterParams: object) {
  console.log(cell, formatterParams);
  return "<i class='fa fa-print'></i>";
}

onMounted(() => {
  // 기본
  basicTabulator.value = new Tabulator(basicTable.value, {
    layout: 'fitDataTable',     // 컨터이너 영역에 그리드 채우기
    height: '200px',            // 그리드 높이
    data: basicTableData,       // 바인딩 데이터
    placeholder:"조회된 데이터가 없습니다.",   //
    reactiveData: true,
    // 설정 개인화
    // 전체 설정을 키거나, 개별설정을 줄 수 있음
    // persistence: true,
    persistence: {
      sort: true,
      filter: true,
      headerFilter: true,
      group: true,
      page: true,
      columns: true
    },
    movableColumns: true,   // 컬럼 위치 변경
    // 컬럼설정
    columns: [
      {title:"Name", field:"name"},
      {formatter: printIcon, width:40, hozAlign:"center", cellClick:function(e: Event, cell: any){alert("Printing row data for: " + cell.getRow().getData().name)}},
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
  <div>
    <h2>Tabulator 샘플</h2>
    <div id="basic-table" ref="basic-table"></div>
    <hr />

  </div>
</template>

<style scoped>
/*Theme the Tabulator element*/
#basic-table {
  background-color:#ccc;
  border: 1px solid #333;
  border-radius: 10px;
}

/*Theme the header*/
#basic-table .tabulator-header {
  background-color:#333;
  color:#fff;
}

/*Allow column header names to wrap lines*/
#basic-table .tabulator-header .tabulator-col,
#basic-table .tabulator-header .tabulator-col-row-handle {
  white-space: normal;
}

/*Color the table rows*/
#basic-table .tabulator-tableholder .tabulator-table .tabulator-row{
  color:#fff;
  background-color: #666;
}

/*Color even rows*/
#basic-table .tabulator-tableholder .tabulator-table .tabulator-row:nth-child(even) {
  background-color: #444;
}
</style>