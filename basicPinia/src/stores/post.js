import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),

  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) =>
        state.posts.filter((post) => post.userId == authorId);
    },
  },

  actions: {
    async fetchPosts() {
      this.posts = [];
      this.loading = true;
      try {
        this.posts = await axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            response.json();
            console.log(response.data);
          });
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(id) {
      this.post = null;
      this.loading = true;
      try {
        this.post = axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
