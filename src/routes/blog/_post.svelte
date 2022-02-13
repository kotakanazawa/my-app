<script>
  export let title
  export let date
  export let categories
</script>

<svelte:head>
  <title>{title} | Kota Kanazawa</title>
  <meta property="og:title" content={title} />
</svelte:head>

{#if categories.length}
  <aside>
    <h3>Posted in: </h3>
    <ul>
      {#each categories as category}
        <li>
          <a href="/blog/categories/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<h1>{title}</h1>
<p>Published: {date}</p>

<slot />
