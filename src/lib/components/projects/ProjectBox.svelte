<script lang="ts">
import { goto } from "$app/navigation";
import { languageDictionary } from "$lib/LanguageDictionary"
let {title, description, languageList = $bindable()} : {title: string, description: string, languageList: string} = $props()
let languageListArray: string[] = languageList.split(",")

console.log(languageList)
console.log(languageListArray)
</script>

<div class = "w-88 h-60 bg-elevated flex flex-col items-start justify-start rounded-xl border-main border-2 px-8 hover:brightness-110">
  <h2 class = "text-main text-2xl hover:underline mt-10" onclick={() => goto(`/projects/${title}`)}>
    {title}
  </h2>
  <p class = "text-muted">
    {description}
  </p>

  <div class="flex flex-row gap-4 text-2xl text-muted">
    {#each languageListArray as lang}
    <span class = "font-icons text-shadow-sm">{languageDictionary[lang]}</span>
    {/each}
  </div>
</div>
