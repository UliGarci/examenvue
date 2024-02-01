<template>
  <div>

    <h1>App</h1>
    
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
  methods:{
    sentToView(){
      alert("Hola")
    }
  }
};
</script>

<style>
</style>
