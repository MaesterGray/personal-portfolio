
<script lang="ts">
	import { Motion, AnimatePresence, useViewportScroll, useMotionValue } from 'svelte-motion';
	import { cn } from '$lib/utils';
	import type { ComponentType } from 'svelte';

	export let navItems: {
		name: string;
		link: string;
		icon?: ComponentType;
	}[];
	export let className: string | undefined = undefined;

	// const { scrollYProgress } = useScroll();
	const { scrollYProgress } = useViewportScroll();

	let visible = false;

	$: $scrollYProgress, updateDirection();

	function updateDirection() {
	//	console.log($scrollYProgress);

		let direction = $scrollYProgress - scrollYProgress.getPrevious();
	//	console.log(direction);

		if (scrollYProgress.get() < 0.05) {
			visible = false;
		} else {
			if (direction < 0) {
				visible = true;
			} else {
				visible = false;
			}
		}
	}
</script>

<AnimatePresence show={true}>
	<Motion
		let:motion
		initial={{
			opacity: 1,
			y: -100
		}}
		animate={{
			y: visible ? 0 : -100,
			opacity: visible ? 1 : 0
		}}
		transition={{
			duration: 0.2
		}}
	>
		<div
			use:motion
			class={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
				className
			)}
		style=" backdrop-filter: blur(16px) saturate(180%); background-color:rgba(17,25,40,0.75); border-radius:12px; border:1px solid rgba(255,255,255,0.125)">
    {#each navItems as navItem}
    <a href={navItem.link}  class={cn(
        "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
      )}>
<span class="block sm:hidden">{navItem.icon}</span>
<span class=" text-sm !cursor-pointer">{navItem.name}</span>
    </a>
{/each}
  
		</div>
	</Motion>
</AnimatePresence>

    