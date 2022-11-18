<template>
  <h2>Stored Resources</h2>
  <ul>
    <resource-item  v-for="res in resources" :key="res.id"  :description="res.description" :id="res.id" :link="res.link" :title="res.title"></resource-item>
  </ul>
</template>

<script>
import  ResourceItem from './ResourceItem';

export default {
  inject:['resources'],
  /*props:['resources'],*/
  name: "StoredResources",
 /* data(){
    return{
      currentResources:this.resources;
    }
  },*/
  components:{
    ResourceItem
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>