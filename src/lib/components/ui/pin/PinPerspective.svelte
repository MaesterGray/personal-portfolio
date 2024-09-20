<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let title: string | undefined;
	export let href: string | undefined;
</script>

<Motion let:motion>
	<div
		use:motion
		class="pointer-events-none z-[60] flex h-80 w-96 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100"
	>
		<div class=" inset-0 -mt-7 h-full w-full flex-none">
			<div class="absolute inset-x-0 top-0 flex justify-center">
				<a href={href}
					target={'_blank'}
					class="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10"
				>
					<span class="relative z-20 inline-block py-0.5 text-xs font-bold text-white">
						{title}
					</span>

					<span
						class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"
					></span>
				</a>
			</div>

			<div
				style="perspective: 1000px; transform: rotateX(70deg) translateZ(0);"
				class="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
			>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 0
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 2
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
				<Motion
					let:motion
					initial={{
						opacity: 0,
						scale: 0,
						x: '-50%',
						y: '-50%'
					}}
					animate={{
						opacity: [0, 1, 0.5, 0],
						scale: 1,

						z: 0
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						delay: 4
					}}
				>
					<div
						use:motion
						class="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
					></div>
				</Motion>
			</div>

			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-40"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-40"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-cyan-600 blur-[3px]"
				/>
			</Motion>
			<Motion let:motion>
				<div
					use:motion
					class="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-cyan-300"
				/>
			</Motion>
		</div>
	</div>
</Motion>