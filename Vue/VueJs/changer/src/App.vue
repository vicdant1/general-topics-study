<template>
  <div class="container">
    <h1 class="text-center text-success">changER</h1>
    <h5 class="text-center">South american countries</h5>

    <div class="row mt-4">
      <div class="col-md-4" v-for="country in countries" :key="country.name">
        <CountryCard>
          <template v-slot:title>
            {{country.name}}
          </template>
          <template v-slot:capital>
            {{country.capital}}
          </template>
          <template v-slot:language>
            {{country.languages.map(lang => ` ${lang.name}`).toString()}}
          </template>
          <template v-slot:currencie>
            {{country.currencies.map(curr => curr.name).toString()}}
          </template>
          <template v-slot:flag>
            <img :src="country.flags.svg" :alt="country.name">
          </template>
        </CountryCard>
      </div>
    </div>

  </div>
</template>

<script>
import CountryCard from './components/CountryCard.vue';

export default {
  name: 'App',
  components: {
    CountryCard,
  },
  data(){
    return{
      countries: []
    }
  },

  methods: {
    async fetchCountriesData(){
      const data = await
        fetch("https://restcountries.com/v2/regionalbloc/USAN")
        .then(res => res.json());
      this.countries = data
    }
  },
  mounted(){
    this.fetchCountriesData();
  }
}
</script>

<style>

</style>
