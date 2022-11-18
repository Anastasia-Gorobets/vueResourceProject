<template>
  <base-card>
    <h2>Add Resource</h2>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput">
      </div>

      <div class="form-control">
        <label for="description">Descriptin</label>
        <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput">
      </div>

      <div class="form-control">
        <base-button  type="submit">Add resource</base-button>
      </div>



    </form>
  </base-card>

  <base-dialog title="Fill all fields" v-if="showErrors" @close="closeDialog">

    <template #default>
      <p>Invalid data</p>
    </template>

    <template #actions>
      <base-button @click="closeDialog">OK</base-button>
    </template>

  </base-dialog>

</template>

<script>

import BaseButton from "../UI/BaseButton";
export default {
  name: "AddResource",
  components: {BaseButton},
  inject:['addResource'],
  data(){
    return{
      showErrors : false
    }
  },
  methods:{

    closeDialog(){
      this.showErrors = false;
    },
    submitData(){

      const title = this.$refs.titleInput.value;
      const desc = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if(title.trim() === '' || desc.trim() === '' || link.trim() === ''){
        this.showErrors = true;
        return;
      }else{
        console.log('ddd');
        this.addResource(title, desc, link);
        this.showErrors = false;
      }


    }
  }
}
</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>