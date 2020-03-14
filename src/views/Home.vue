<template>
  <div class="home">
    title
      {{title}}
  </div>
</template>

<script>
// @ is an alias to /src
import HomeRequest from "@/services/home/home.request";

export default {
  name: 'Home',
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      const homeRequest = new HomeRequest();
      homeRequest.start({
        successCallBack(data) {
          console.log(data.data.title);
        },
        failCallBack(e) {
          console.error(e);
        }
      });
    }
  }

}
</script>
