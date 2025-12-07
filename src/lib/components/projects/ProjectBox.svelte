<script lang="ts">
let {title, description, languageList = $bindable()} : {title: string, description: string, languageList: string[]} = $props()
</script>

<div class = "w-xs h-32 bg-elevated flex flex-col items-center justify-start rounded-xl border-main border-2 p-1">
  <h2 class = "text-2xl p-4 mt-0 mb-0">
    {title}
  </h2>
  <p>
    {description}
  </p>
</div>
