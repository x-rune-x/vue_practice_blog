<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
        <button @click="handleDelete">Delete post</button>
        <span>
          <div class="tags" v-for="tag in post.tags" :key="tag">
            <router-link :to="{ name: 'Tag', params: { tag: tag } }">
              #{{ tag }}
            </router-link> 
          </div>
        </span>
    </div>
    <div v-else>
        <Spinner />
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'
import { doc, deleteDoc } from "firebase/firestore"

export default {
    components: {Spinner},
    setup() {
      const route = useRoute()
      console.log(route)
      const {post, error, load} = getPost(route.params.id)

      load()

      const handleDelete = async () => {
        await deleteDoc(doc(projectFirestore, 'posts', route.params.id))

        r
      }

      return { post, error, handleDelete }
    }
}
</script>

<style>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  span {
    display: inline-block;
  }
  div .tags {
    display: inline;
  }

</style>