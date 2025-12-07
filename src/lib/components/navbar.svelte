<script lang="ts">
const links: string[] = ['projects','writing','about']
</script>


<nav class="flex flex-col min-h-screen items-center justify-center w-2/10">
  <div class="flex flex-col">
    <a class="px-1 py-2 hover:underline" href="/">home</a>
    {#each links as link}
      <a class="px-1 py-2 hover:underline" href="/{link}">{link}</a>
    {/each}
  </div>
</nav>
