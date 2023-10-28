<template>
    <div>
      <button>Button</button>
  
      <img :src="require(`./${icon}.png`)" />
      <img :src="require(`./${icon2}.png`)" />
    </div>
  </template>
  
  <script>
  export default {
    title: "App",
    data() {
      return {
        icon: "top",
        icon2: "top2",
      };
    },
  };
  </script>
  