<script>
    import { navItems } from '$lib';
    import Hero from '$lib/components/Hero.svelte';
    import Grid from '$lib/components/Grid.svelte';
    import RecentProjects from '$lib/components/RecentProjects.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Clients from '$lib/components/Clients.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import FloatingNavbar from '$lib/components/ui/FloatingNavbar.svelte';
   
  
  </script>

   <main class="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div class="max-w-7xl w-full">
        <FloatingNavbar className='' navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>