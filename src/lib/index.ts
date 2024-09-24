// place files you want to import through the `$lib` alias in this folder.
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      class: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClass: "w-full h-full",
      titleClass: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      class: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClass: "",
      titleClass: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      class: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClass: "",
      titleClass: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      class: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClass: "",
      titleClass: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a University LMS",
      description: "The Inside Scoop",
      class: "md:col-span-3 md:row-span-2",
      imgClass: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClass: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      class: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClass: "",
      titleClass: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Photostore",
      des: " This project is a secure, cloud-based photo storage application that allows users to upload, store, and organize their pictures. It features a robust authentication system to ensure that user data remains private and secure. The app offers a simple and intuitive user interface for managing albums, viewing images, and accessing stored content from any device.",
      img: "/project1.png",
      technologies:['Svelte','Svelte-kit', 'tailwind-css', 'postgresql', 'supabase', 'typescript'],
      iconLists: ["/svelte-logo.png", "/tail.svg", "/ts.svg", "/postgre-sql-logo.png", "/supabselogo.png"],
      link: "https://sveltephotostore.netlify.app/",
      github_link:'https://github.com/MaesterGray/Supabase-photostore-svelte'
    },
    {
      id: 2,
      title: "Car-List",
      des: "An application that uses supabase authentication to identify and authorize users to access their respective car lists and modify those lists",
      img: "/project2.png",
      technologies:['Svelte', 'Svelte-kit', 'tailwind-css', 'postgrespl', 'supabase', 'typescript'],
      iconLists: ["/svelte-logo.png", "/tail.svg", "/ts.svg", "/postgre-sql-logo.png", "/supabselogo.png"],
      link: "https://svelte-car-list.netlify.app",
      github_link:'https://github.com/MaesterGray/supabase-fullstack-car-list'
    },
    {
      id: 3,
      title: "Gemini clone",
      des: " This project is a full-stack implementation of a chatbot inspired by the Gemini platform. The chatbot is designed to handle conversational inputs using natural language processing (NLP) to simulate human-like interactions.",
      img: "/project3.png",
      technologies:['Svelte','Svelte-kit','Gemini-api'],
      iconLists: ["/svelte-logo.png","/ts.svg" , "/tail.svg"],
      link: "https://sveltegeminiclone.netlify.app",
      github_link:'https://github.com/MaesterGray/gemini-clone'
    },
    {
      id: 4,
      title: "Moviebox(svelte)",
      des: "A movie box application that displays trending movies to the user gotten form the open source the movie database api",
      img: "/project4.png",
      technologies:['Svelte','Svelte-kit','tmdb-api'],
      iconLists: ["/svelte-logo.png","/ts.svg", "/tail.svg" ],
      link: "https://sveltemoviebox.netlify.app",
      github_link:'https://github.com/MaesterGray/svelte-movie-box'
    },{
      id: 5,
      title: "Anime vault",
      des: "A simple interface that displays anime within card components fetched from an api",
      img: "/project5.png",
      technologies:['Svelte','Svelte-kit'],
      iconLists: ["/svelte-logo.png","/ts.svg", "/tail.svg" ],
      link: "https://anime-vault-svelte.netlify.app",
      github_link:'https://github.com/MaesterGray/anime_vault/'
    },
    {
      id: 6,
      title: "Expense tracker",
      des: "An expense tracker, that stores each item(expense) as a firebase document in the firebase firestore",
      img: "/project6.png",
      technologies:['Svelte','firebase'],
      iconLists: ["/svelte-logo.png","/ts.svg","firebase-logo.png" , "/tail.svg"],
      link: "https://svelte-expensetracker.netlify.app/",
      github_link:'https://github.com/MaesterGray/Movie-Box'
    },

    {
      id: 7,
      title: "Moviebox(React)",
      des: "A movie box application that displays trending movies to the user gotten form the open source the movie database api, created using react",
      img: "/project4.png",
      technologies:['React','tmdb-api'],
      iconLists: ["/react-logo.png", "/tail.svg", "/ts.svg","/fm.svg"],
      link: "https://genericmoviebox.netlify.app",
      github_link:'https://github.com/MaesterGray/Movie-Box'
    },
    {
      id: 8,
      title: "3d-portfolio",
      des: "A movie box application that displays trending movies to the user gotten form the open source the movie database api",
      img: "/project8.png",
      technologies:['React','Three-js'],
      iconLists: [ "/react-logo.png", "/ts.svg", "/three.svg",  "/tail.svg", ],
      link: "https://mrgray.netlify.app/",
      github_link:'https://github.com/MaesterGray/3d_portfolio'
    },
    
    
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, in lagos state university",
      class: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Dev - PorteVest",
      desc: "Collaborated with a team to designed and develop a web based platform using svelte",
      class: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance ",
      desc: "Have worked on a ton of full stack gigs to create web sites from concept to product",
      class: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Fullstack Dev - Beautwelt Technologies",
      desc: "Implemented user authentication flows and database management",
      class: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link:'https://github.com/MaesterGray/',
      img: "/git.svg",
    },
    {
      id: 2,
      link:'',
      img: "/twit.svg",
    },
    {
      id: 3,
      link:'https://www.linkedin.com/in/nwabuisi-chike-4062a9288',
      img: "/link.svg",
    },
    {
      id:4,
      link:'https://www.youtube.com/channel/UCGrhNkSexZnKSHhzpbuSAHw/',
      img:"/youtube.svg"
    }
  ];