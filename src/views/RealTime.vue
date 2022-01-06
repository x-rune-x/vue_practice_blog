<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import { onSnapshot, query, collection, orderBy } from '@firebase/firestore'
export default {
  setup() {
    const posts = ref([])

    const postsCollection = query(collection(projectFirestore, 'posts'), orderBy('createdAt', 'desc'))
    onSnapshot(postsCollection, (snap) => {
      let docs = snap.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })
      console.log(docs)
      posts.value = docs
    })

    return { posts }
  } 
}
</script>

<style>

</style>