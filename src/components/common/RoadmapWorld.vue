<template>
  <section class="tin-world-roadmap">
    <nav class="tin-world-roadmap__filters">
      <div v-for="item in map" :key="item.year"
        class="tin-world-roadmap__filter"
        :class="{
          'is-active':item.year === filters.year,
          'is-old':oldYear(item.year),
        }">
        <div class="tin-world-roadmap__filter__header"
          @click.prevent="setYearFilter(item.year)">
          {{item.year}}
        </div>
        <div class="tin-world-roadmap__filter__quarters">
          <div v-for="countries, quarter in map.find(o => o.year === filters.year)?.quarters"
            :key="quarter" class="tin-world-roadmap__filter__quarter"
            :class="{
              'is-active':isPhaseActive(item.year, quarter),
              'is-old':oldQuarter(item.year, quarter),
            }"
            @click.prevent="setQuarterFilter(quarter)">
            {{quarter}}
          </div>
        </div>
      </div>
    </nav>

    <WorldMap class="tin-map" />
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import WorldMap from '@/components/tin/WorldMap.vue'
  import moment from 'moment'

  const filters = ref({
    year: null,
    quarter: null,
  })

  const map = ref([
    {
      year: 2022,
      quarters: { q1: ['es'], q2: ['es', 'pt'], q3: ['es', 'pt', 'fr'], q4: ['es', 'pt', 'fr', 'gb'] }
    },{
      year: 2023,
      quarters: { q1: ['es'], q2: ['es', 'pt'], q3: ['es', 'pt', 'fr'], q4: ['es', 'pt', 'fr', 'gb'] }
    },{
      year: 2024,
      quarters: { q1: ['es'], q2: ['es', 'pt'], q3: ['es', 'pt', 'fr'], q4: ['es', 'pt', 'fr', 'gb'] }
    },{
      year: 2025,
      quarters: { q1: ['es'], q2: ['es', 'pt'], q3: ['es', 'pt', 'fr'], q4: ['es', 'pt', 'fr', 'gb'] }
    }
  ])

  const isPhaseActive = (year, quarter) => {
    return filters.value.year === year && filters.value.quarter === quarter
  }

  const setYearFilter = (year) => {
    let curr = Number(moment().format('YYYY'))
    let quarter = null

    year = Number(year)

    if(year > curr){
      quarter = 'q1'
    }

    if(year === curr){
      for(let n = 1; n <= 4; n++){
        if(!quarter && !oldQuarter(year, n)){
          quarter = `q${n}`
        }
      }
    }
    filters.value.year = year
    filters.value.quarter = quarter
  }

  const setQuarterFilter = (quarter) => {
    filters.value.quarter = quarter
  }

  const oldYear = (year) => {
    return moment().year(year).isBefore(moment())
  }

  const oldQuarter = (year, quarter) => {
    quarter = Number(String(quarter).match(/\d+/)[0])
    return moment().year(year).quarter(quarter).endOf('quarter').isBefore(moment())
  }

  onMounted(() => {
    setYearFilter(moment().format('YYYY'))
  })
</script>