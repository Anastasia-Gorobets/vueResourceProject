<template>
  <base-card>
    <base-button @click="selectTab('stored-resources')" :mode="currentlySelectedTab == 'stored-resources'?null:'flat'">Stored Resources</base-button>
    <base-button @click="selectTab('add-resource')" :mode="currentlySelectedTab == 'add-resource'?null:'flat'">Add Resource</base-button>
  </base-card>

  <component :is="currentlySelectedTab"></component>
</template>

<script>

import  StoredResources from './StoredResources';
import  AddResource from './AddResource';

export default {
  components:{
    StoredResources,
    AddResource
  },
  name: "TheResources",

  provide(){
    return{
      resources:this.storedResources
    }
  },

  data(){
    return{
      currentlySelectedTab:'stored-resources',
      storedResources:[
        {
          id:'1', title:'Official Guiade', description:'Some text about vue', link:'vuejs.org'

        },
        {
          id:'2', title:'Official google', description:'Some text about google', link:'google.com'

        }
      ]
    }
  },


  methods:{

    selectTab(val){
      console.log(val);
      this.currentlySelectedTab = val;
    }

  }
}
</script>

<style scoped>

</style>