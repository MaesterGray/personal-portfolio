<script lang="ts">
	import MagicButton from '$lib/components/MagicButton.svelte';
import { cn } from '$lib/utils';
import { Copy } from 'lucide-svelte';
import lottie from 'lottie-web';
import { onMount } from 'svelte';
import GradientBg from '../GradientBg.svelte';
import animationData from "$lib/data/confetti.json"
	export let className: string | undefined = undefined;
	export let title: string | HTMLElement | undefined = undefined;
	export let description: string | HTMLElement | undefined = undefined;
    export let imgClassName
    export let titleClassName
    export let id
    export let spareImg
    export let img
    const leftLists = ["Svelte", "Express", "Typescript"];
  const rightLists = ["Sveltekit", "NuxtJS", "GraphQL"];
  let copied = false

  function handleCopy(){
    const text = 'nwabuisichike70@gmail.com'
    navigator.clipboard.writeText(text)
    copied = true
    lottie.loadAnimation({container:copyContainer,

loop:false,
autoplay:copied,
animationData:animationData,
rendererSettings:{
  preserveAspectRatio:'xMidYMid slice'
}})
  }
 

  let copyContainer:HTMLDivElement;
  // onMount(()=>{
  //   if(copied){
  //     lottie.loadAnimation({
  //     container:copyContainer,

  //     loop:copied,
  //     autoplay:copied,
  //     animationData:animationData,
  //     rendererSettings:{
  //       preserveAspectRatio:'xMidYMid slice'
  //     }
  //   })
  //   }
   
  // })
  
</script>

<div
class={cn(
  // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
  "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bento-grid-item",
  className
)}

>
<div class={`${id === 6 && "flex justify-center"} h-full`}>
  <div class="w-full h-full absolute">
   
      {#if img}
      <img
      src={img}
      alt={img}
      class={cn(imgClassName, "object-cover object-center ")}
    />
      {/if}
  </div>
  <div
    class={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
      } `}
  >
    {#if spareImg}
    <img
    src={spareImg}
    alt={spareImg}
    width={220}
    class="object-cover object-center w-full h-full"
  /> 
    {/if}
  </div>

  {#if id ===6}
  <GradientBg>
     <div class="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
   </GradientBg>
  {/if}
  
  <div
    class={cn(
      titleClassName,
      "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
    )}
  >
    <div class="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
      {description}
    </div>
    <div
      class={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
    >
      {title}
    </div>

    <!-- {id === 2 && <GridGlobe />} -->
{#if id ===3}
    
      <div class="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        <div class="flex flex-col gap-3 md:gap-3 lg:gap-8">
            {#each leftLists as item}
            <span
            class="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
            {/each}
          
          <span class="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div class="flex flex-col gap-3 md:gap-3 lg:gap-8">
          <span class="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
          {#each rightLists as item}
          <span
          class="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
          lg:opacity-100 rounded-lg text-center bg-[#10132E]"
        >
          {item}
        </span>
          {/each}
          
        </div>
      </div>
{/if}
    {#if id === 6}
    <div class="mt-5 relative">
        <div bind:this={copyContainer}
         
          class={`absolute -bottom-5 right-0 h-[200px] w-400px ${copied ? "block" : "block"
            }`}
        >
        </div>

        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
><Copy slot='icon'/></MagicButton>
      </div>
    {/if}
    
  </div>
</div>
</div>