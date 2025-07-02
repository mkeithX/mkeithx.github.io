import { themes, type PrismTheme } from 'prism-react-renderer';

const baseTheme = themes.github;

const customTheme: PrismTheme = {
  ...baseTheme, // Spread first to allow overriding below
  plain: {
    ...baseTheme.plain,
    backgroundColor: 'rgb(242, 242, 242)', // override only backgroundColor
    // color intentionally left out or can be overridden if needed
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: 'rgb(5, 80, 174)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: 'rgb(153, 153, 136)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'rgb(227, 17, 108)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: 'rgb(57, 58, 52)',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'rgb(54, 172, 170)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'rgb(0, 164, 219)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'rgb(215, 58, 73)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'rgb(111, 66, 193)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: 'rgb(0, 0, 159)',
      },
    },
  ],
};

export default customTheme;
