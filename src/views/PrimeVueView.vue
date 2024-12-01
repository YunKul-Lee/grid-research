<script setup lang="ts">
import PrimeVueDataTable from "@/components/PrimeVueDataTable.vue";

const cssName = 'base'
const cssModules = import.meta.glob('/node_modules/tailwindcss/*.css')
const cssComponents = {}

Object.keys(cssModules).forEach((key) => {
  // @ts-ignore
  const name = key.match(/^\/node_modules\/tailwindcss\/(.*)\.css$/)[1].toLowerCase()
  // @ts-ignore
  cssComponents[name] = cssModules[key]
})

// @ts-ignore
import(/* @vite-ignore */cssComponents[cssName]())

</script>

<template>
  <main>
    <PrimeVueDataTable />
  </main>
</template>

