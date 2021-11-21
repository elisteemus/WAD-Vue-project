<template>
  <input
    type="button"
    @click.prevent="resetCounter"
    value="Reset likes"
    style="margin-top: 20px"
  />
  <div id="posts-container">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post-top">
        <img id="userimage" src="@\assets\user.png" />
        <p id="date">{{ post.date }}</p>
      </div>
      <div class="post-content">
        <img class="post-image" :src="post.photocontent" />
        <p>{{ post.textcontent }}</p>
      </div>
      <div id="like">
        <p style="float: left">{{ post.likes }} like(s)</p>
        <br />
        <input
          type="button"
          @click.prevent="incrementCounter(post.id)"
          value="Like 👍"
          style="float: right"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCounter: function (id) {
      this.$store.commit("incrementCounter", id);
    },
    resetCounter: function () {
      this.$store.commit("resetCounter");
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style>
.post {
  display: inline-block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  width: 530px;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px #b4d3e6;
  background-color: white;
}

#userimage {
  width: 30px;
  height: 30px;
}

#userimageheader {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

#date {
  color: #727272;
  font-size: 12px;
}

.post-top {
  display: flex;
  justify-content: space-between;
  margin-right: 3px;
}

.post-content p {
  color: black;
  font-size: 20px;
  text-align: left;
}

.post-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 100%;
}

input {
  color: white;
  background-color: rgb(169, 208, 253);
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  cursor: pointer;
}

input:hover {
  background-color: rgb(146, 196, 253);
}
</style>