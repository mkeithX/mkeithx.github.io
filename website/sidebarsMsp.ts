import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    mspSidebar: [
        'index',
        // 'tech-notes',

        {
            type: 'category',
            label: 'Snippets',
            link: {
                type: 'doc',
                id: 'snippets/index',
            },
            items: [
                'snippets/email-scripts',
            ]
        },
  
    
        {
            type: 'category',
            label: 'How to',
            link: {
                type: 'doc',
                id: 'how-to/index',
            },
            items: [
                'how-to/win-cli'
            ]
        },
  
        
        {
            type: "category",
            label: "Archive",
            collapsed: true,
            collapsible: true,
            items: [
                'archive/frequently-used-snippets',
                'archive/clients/kitimi-platforms',
                'archive/clients/LF-solutions',
            ]
        },

    ],

};

export default sidebars;