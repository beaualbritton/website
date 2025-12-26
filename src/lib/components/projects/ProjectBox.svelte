<script lang="ts">
import { goto } from "$app/navigation";
let {title, description, languageList = $bindable()} : {title: string, description: string, languageList: string[]} = $props()
</script>

<div class = "w-xs h-48 bg-elevated flex flex-col items-start justify-start rounded-xl border-main border-2 px-8 hover:brightness-115">
  <h2 class = "text-main text-2xl hover:underline" onclick={() => goto(`/projects/${title}`)}>
    {title}
  </h2>
  <p>
    {description}
  </p>
</div>
