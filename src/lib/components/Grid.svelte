<script>
import {gridItems} from '$lib'
import BentoGrid from './ui/BentoGrid/BentoGrid.svelte'
import BentoGridItem from './ui/BentoGrid/BentoGridItem.svelte'
</script>
<section id="about" class=" text-white">
    <BentoGrid className="w-full py-20">
        {#each gridItems as item}
        <BentoGridItem
        id={item.id}
        title={item.title}
        description={item.description}
        className={item.class}
        img={item.img}
        imgClassName={item.imgClass}
        titleClassName={item.titleClass}
        spareImg={item.spareImg}
      />
        {/each}
    
    </BentoGrid>
  </section>
