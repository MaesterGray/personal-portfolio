<script>
    import { workExperience } from "$lib";
    import Button from "./ui/MovingBorder/Button.svelte";
</script>

<div class="py-20 w-full">
    <h1 class="heading text-white">
      My <span class="text-purple">work experience</span>
    </h1>
    <div class="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {#each workExperience as card}
        <Button
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <div class="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
          <img
            src={card.thumbnail}
            alt={card.thumbnail}
            class="lg:w-32 md:w-20 w-16"
          />
          <div class="lg:ms-5">
            <h1 class="text-start text-xl md:text-2xl font-bold text-white">
              {card.title}
            </h1>
            <p class="text-start text-white-100 mt-3 font-semibold">
              {card.desc}
            </p>
          </div>
        </div>
      </Button>
        {/each}
    </div>
</div>