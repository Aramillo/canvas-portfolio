export default defineAppConfig({
  appName: 'Canvas a Nuxt portfolio template',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
  profilePicture: '/assets/hugo-richard-light.webp',
  footerName: 'HugoRCD',
  email: 'contact@hrcd.fr',
  twitterUsername: '@HugoRCD__',
  phone: '(+33) 6 21 56 22 18',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/Aramillo',
    // twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/antonio-miguel-p%C3%A9rez-aramillo-aa780b182',
    // instagram: 'https://www.instagram.com/hugo.rcd_',
    // spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  cvLinks: {
    en: 'https://drive.google.com/file/d/1orIg4ABE277hZPv3OzFomKjQJWk0iuq0/view?usp=drive_link',
    es: 'https://drive.google.com/file/d/1G2-ErWg4sZ0vlwAbgRJgqaAE8YRgOLE6/view?usp=drive_link',
    fr: 'https://drive.google.com/file/d/1orIg4ABE277hZPv3OzFomKjQJWk0iuq0/view?usp=drive_link',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
