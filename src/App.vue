<template>
  <the-header :title="headerTitle"></the-header>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import  StoredResources from './components/resources/StoredResources';
import  TheHeader from './components/layouts/TheHeader';

export default {
  components:{
    StoredResources,
    TheHeader
  },
  name: "App",
  data(){
    return{
      headerTitle:'Header',
      storedResources:[
        {
          id:'1', title:'Official Guiade', description:'Some text about vue', link:'vuejs.org'

        },
        {
          id:'2', title:'Official google', description:'Some text about google', link:'google.com'

        }
      ]
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>