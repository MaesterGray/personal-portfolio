<script>
    import { onMount } from "svelte";
    import {stagger,animate} from 'motion'
    import { cn } from "$lib/utils";

    export let words
    export let className

    let wordsArray = words.split(' ')
    onMount(()=>{
        const wordSpans = document.querySelectorAll('.words')
        animate(wordSpans,{opacity:1},
        { duration: 2,
        delay: stagger(0.2),})

    })
</script>


<div class={cn("font-bold", className)}>
    <div class="my-4">
      <div class=" dark:text-white text-black leading-snug tracking-wide">
        {#each wordsArray as word,index}
            <span  class={`  ${index > 3 ? " text-purple" : "dark:text-white text-black" } opacity-0 words`}>{word}{' '}</span>
        {/each}
      </div>
    </div>
  </div>