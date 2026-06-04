
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