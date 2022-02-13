<script context="module">
  export const load = async ({ fetch }) => {
    const posts = await fetch('api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>

<script>
  export let posts
</script>

<h1>Blog</h1>

<ul>
  {#each posts as post}
    <li>
      <h2>
        <a sveltekit:prefetch href={post.path} >
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>
