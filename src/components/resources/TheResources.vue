<template>
  <base-card>
    <base-button @click="selectTab('stored-resources')" :mode="currentlySelectedTab == 'stored-resources'?null:'flat'">Stored Resources</base-button>
    <base-button @click="selectTab('add-resource')" :mode="currentlySelectedTab == 'add-resource'?null:'flat'">Add Resource</base-button>
  </base-card>

  <keep-alive>
    <component :is="currentlySelectedTab"></component>
  </keep-alive>

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
      resources:this.storedResources,
      addResource:this.addResource,
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

    addResource(title, desc, link){

      const newResource ={
        id:new Date().toISOString(), title:title, description:desc, link:link
      };

      this.storedResources.unshift(newResource);
      this.currentlySelectedTab = 'stored-resources';

    },

    selectTab(val){
      console.log(val);
      this.currentlySelectedTab = val;
    }

  }
}
</script>

<style scoped>

</style>