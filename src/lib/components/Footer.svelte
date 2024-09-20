<script>
    import { socialMedia } from "$lib";
    import MagicButton from "./MagicButton.svelte";
import { Navigation,Download } from 'lucide-svelte';
    
</script>





    <footer class="w-full pt-20 pb-10" id="contact">
      <div class="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          class="w-full h-full opacity-50 "
        />
      </div>

      <div class="flex flex-col items-center">
        <h1 class="heading lg:max-w-[45vw] text-white">
          Ready to take <span class="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p class="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div class="flex space-x-1">
          <a href="mailto:nwabuisichike70@gmail.com">
            <MagicButton
              title="Let's get in touch"
              position="right"
              handleClick={()=>{}}
              otherClasses=''
            >
          <Navigation slot='icon'/>
          </MagicButton>
        </a>
        <a href="/Nwabuisi-chike's resume.pdf" download="Nwabuisi-chike's resume">
          <MagicButton 
          title={'Download my resume'}
          position='right'
          handleClick={()=>{}}
          otherClasses=''
          >
            <Download slot='icon'/>
          </MagicButton>
        </a>
        </div>
        
      </div>
      <div class="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p class="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Nwabuisi chike
        </p>

        <div class="flex items-center md:gap-3 gap-6">
            {#each socialMedia as info}
            <a href={info.link} target="_blank" ><div
            class="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </div> 
        </a>
            {/each}
        </div>
      </div>
    </footer>