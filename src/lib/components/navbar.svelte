<script lang="ts">
const links: string[] = ['projects','writing','about']
</script>


<nav class="flex flex-col h-screen items-center justify-center w-2/10 mr-8">
  <div class="h-1/2 border-l border-white/15 px-8 flex items-center justify-center">
    <div class="flex flex-col text-xl">
      <a class="px-1 py-2 hover:underline" href="/">home</a>
      {#each links as link}
        <a class="px-1 py-2 hover:underline" href="/{link}">{link}</a>
      {/each}
    </div>
  </div>
</nav>
