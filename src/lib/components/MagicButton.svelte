<script>
    export let position,handleClick,otherClasses, title
    
</script>

<button
class="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
on:click={handleClick}
>
<span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

<span
  class={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
       bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
>



    {#if  position==='left'}
    <slot name="icon"></slot>
    {title}
    {:else if  position==='right'}
    {title}
    <slot name="icon"></slot>
    {/if}

</span>
</button>