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

    <section class="tin-map">
      <img v-for="country in countries" :key="country" :src="`/icons/countries/${country}.svg`" width="23" class="tin-map__country" :class="[`tin-map__country__${country}`]" />
      <WorldMap class="tin-map__map" />
    </section>
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

  const map = [
    {
      year: 2022,
      quarters: { q1: [], q2: ['sv', 'es', 'gb', 'lu'], q3: ['sv', 'es', 'gb', 'lu', 'sg'], q4: ['sv', 'es', 'gb', 'lu', 'sg', 'us'] }
    },{
      year: 2023,
      quarters: { q1: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae'], q2: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in'], q3: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch'], q4: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'] }
    },{
      year: 2024,
      quarters: { q1: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q2: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q3: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q4: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'] }
    },{
      year: 2025,
      quarters: { q1: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q2: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q3: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'], q4: ['sv', 'es', 'gb', 'lu', 'sg', 'us', 'ae', 'in', 'ch', 'mx'] }
    }
  ]

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

  const countries = computed(() => {
    if(!map || !filters.value.year || !filters.value.quarter) return []
    return map.find(o => o.year === filters.value.year).quarters[filters.value.quarter]
  })

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