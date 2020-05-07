<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr>
    <router-link to="/">Go to Top</router-link>
  </section>
</template>


<script>
export default {
  data: function(){
    return {
      title:'Other',
      message: 'これは、別のページです。',
    };
  },
}
</script>


<style>
.container {
  padding:5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top:5px;
  font-size: 20pt;
}
a {
  font-size:16pt;
}
</style>
