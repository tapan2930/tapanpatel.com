let resources = [ {
    category: 'css',
    heading: 'Flexbox: Froggy',
    description: 'Check your flexbox skill with this fun and interactive game',
    cover: { url: 'https://media.graphcms.com/cvEEqdbBQqSi87hYvyMW' }
  },
  {
    category: 'tools_and_editor',
    heading: 'NameCheap - Free Logo',
    description: 'Free Logo Design and download from nameCheap',
    cover: { url: 'https://media.graphcms.com/o1jpEhMmS8uUFvOGt8Zl' }
  },
  {
    category: 'tools_and_editor',
    heading: 'Hatchful - Logo Maker',
    description: 'Create free stunning logos in seconds',
    cover: { url: 'https://media.graphcms.com/V7AHqfKqRg2N1FeENqTp' }
  },
  {
    category: 'js',
    heading: 'Snippets of Hooks',
    description: 'Great resource to learn and understand React Hooks ',
    cover: { url: 'https://media.graphcms.com/qBcrqCXbTwVaFG0GNCfQ' }
  },
  {
    category: 'js',
    heading: '30secondsofcode',
    description: 'Short code snippets for all your development needs',
    cover: { url: 'https://media.graphcms.com/yv1NjsvUR8a2b9rscmFV' }
  },
  {
    category: 'assets',
    heading: 'Unsplash',
    description: 'The internet’s source of freely-usable images.',
    cover: { url: 'https://media.graphcms.com/eQ1cBtlQSnqkuCkbbJOi' }
  },
  {
    category: 'assets',
    heading: 'Illustrations',
    description: '120+ open source illustrations kit.',
    cover: { url: 'https://media.graphcms.com/09Z4y8UXQ3q3efj7cexK' }
  },
  {
    category: 'miscellaneous',
    heading: 'Colorsandfonts - Best place for color and Font',
    description: 'Find colors and typography combinations ready to copy paste in one click.',
    cover: { url: 'https://media.graphcms.com/RPK6AdlOTyqkhAvQHUJ7' }
  }
]
const resourcesCat = (resources:Array<any>)=>{
    let cat = resources.map((resource)=>{
        return resource.category
    })
    
    return new Set(cat)
}

// 
export default resourcesCat;