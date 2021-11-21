<template>
  <div class="home">
    <Post />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post,
  },
  props: ["posts"],
  data() {
    return {};
  },
  //computed: {
  //  posts() {
  //    return this.$store.getters.posts
  //  }
  //},
};
</script>
