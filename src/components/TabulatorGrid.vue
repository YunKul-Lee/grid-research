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

const fitDataFillTable = useTemplateRef('fit-data-fill-table');
const fitDataFillTableTabulator = ref(null);
const fitDataFillTableData = reactive([...data1])

const frozenTable = useTemplateRef('frozen-table')
const frozenTabulator = ref(null);
const frozenTabulatorData = reactive([...data1])

onMounted(() => {
  // 기본
  basicTabulator.value = new Tabulator(basicTable.value, {
    height: '200px',
    data: basicTableData,
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

  // 비어있는 컬럼 빈 값으로 채우기
  //
  //
  /**
   * [ layout ] 속성
   * - fitDataFill : 데이터에 맞게 컬럼 표현
   * - fitDataStretch : 마지막 컬럼의 길이를 늘려 화면을 채움
   * - fitDataTable : 그리드 크기가 데이터에 맞게 리사이즈
   * - fitColumns : 컨테이너 width 에 맞게 가로길이 조정
   *
   * [ responsiveLayout ] 속성
   * - hide : window 크기를 조절함에 따라 사이즈를 초과하는 컬럼은 숨김처리
   */
  fitDataFillTableTabulator.value = new Tabulator(fitDataFillTable.value, {
    layout: "fitDataFill",
    height: '300px',
    data: fitDataFillTableData,
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

  frozenTabulator.value = new Tabulator(frozenTable.value, {
    height: '300px',
    data: frozenTabulatorData,
    columns: [
      {title:"Name", field:"name", frozen: true},
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
    <h2>Basic</h2>
    <div ref="basic-table"></div>
    <hr />

    <h2>Layout</h2>
    <div ref="fit-data-fill-table"></div>
    <hr />

    <h2>틀고정</h2>
    <div ref="frozen-table"></div>
    <hr />
  </div>
</template>

