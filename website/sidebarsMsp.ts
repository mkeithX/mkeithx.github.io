import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    mspSidebar: [
        'overview',
        'frequently-used-snippets',
        {
            type: "category",
            label: "Clients",
            collapsed: true,
            collapsible: true,
            items: [
                'clients/kitimi-platforms',
                'clients/LF-solutions',
            ]
        },

    ],

};

export default sidebars;