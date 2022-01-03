<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="postsWithTag.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import Spinner from '../components/Spinner.vue'


export default {
  components: { PostList, Spinner },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPosts()
    load()

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })


    return { postsWithTag, error }
  }
}
</script>

<style>

</style>