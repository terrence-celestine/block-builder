
export const LandingPageTemplate = [
    {
        id: '1',
        type: 'hero',
        props: { title: 'Welcome to My App', subtext: 'Build your landing pages in seconds.', imageSource: 'hero-bg.jpg' }
      },
      {
        id: '2',
        type: 'spacer',
        props: { height: 40 }
      },
      {
        id: '3',
        type: 'columns',
        props: { leftContent: 'Feature One: Easy to use.', rightContent: 'Feature Two: Highly scalable.' }
      },
      {
        id: '4',
        type: 'divider',
        props: { thickness: 1, color: '#e5e7eb', margin: 20 }
      },
      {
        id: '5',
        type: 'button',
        props: { label: 'Get Started Now', url: '/signup', variant: 'solid' }
      }
    ]

export const saasLanding = [
    { id: '1', type: 'hero', props: { title: 'Enterprise Power, Simple UI', subtext: 'Scale your business with our cloud-native platform.', imageSource: 'saas-dashboard.png' } },
    { id: '2', type: 'columns', props: { leftContent: 'Automated Workflows', rightContent: 'Real-time Analytics' } },
    { id: '3', type: 'button', props: { label: 'Start Free Trial', url: '/signup', variant: 'solid' } }
]

export const portfolio = [
    { id: '1', type: 'hero', props: { title: 'Hi, I am Jane Designer', subtext: 'Crafting digital experiences that matter.', imageSource: 'avatar.jpg' } },
    { id: '2', type: 'text', props: { content: 'Selected Works' } },
    { id: '3', type: 'image', props: { src: 'project1.png', alt: 'UI/UX Project' } },
    { id: '4', type: 'image', props: { src: 'project2.png', alt: 'Branding Project' } }
];

export const blogPost = [
    { id: '1', type: 'text', props: { content: 'The Future of AI in 2026' } },
    { id: '2', type: 'quote', props: { quote: 'Innovation is the key to progress.', author: 'Anonymous' } },
    { id: '3', type: 'text', props: { content: 'Full blog content goes here...' } },
    { id: '4', type: 'divider', props: { thickness: 1, color: '#e5e7eb', margin: 20 } },
    { id: '5', type: 'list', props: { items: ['AI Trends', 'Future Tech', 'Automation'], ordered: false } }
]