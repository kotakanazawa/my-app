<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()
    const matchingPosts = posts.filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts
      }
    }
  }
</script>

<script>
  export let posts
</script>

<h3>記事一覧</h3>
{#each posts as post}
<ul>
  <li>
    <h2>
      <a href={post.path}>
        {post.meta.title}
      </a>
    </h2>
    Published {post.meta.date}
  </li>
</ul>
{/each}
