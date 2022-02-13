<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import 'prismjs/themes/prism.min.css'
</script>

<svelte:head>
  <title>Kota Kanazawa</title>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
