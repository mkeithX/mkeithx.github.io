import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.dracula;

export default {
  plain: {
    color: 'rgba(248, 248, 242, 1)',
    backgroundColor: 'rgba(40, 42, 54, 1)',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: 'rgba(86, 156, 214, 1)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['property', 'parameter'],
      style: {
        color: 'rgba(156, 220, 254, 1)',
      },
    },
    {
      types: ['script'],
      style: {
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      types: ['boolean', 'arrow', 'atrule', 'tag'],
      style: {
        color: 'rgba(86, 156, 214, 1)',
      },
    },
    {
      types: ['number', 'color', 'unit'],
      style: {
        color: 'rgba(181, 206, 168, 1)',
      },
    },
    {
      types: ['font-matter'],
      style: {
        color: 'rgba(206, 145, 120, 1)',
      },
    },
    {
      types: ['keyword', 'rule'],
      style: {
        color: 'rgba(197, 134, 192, 1)',
      },
    },
    {
      types: ['regex'],
      style: {
        color: 'rgba(209, 105, 105, 1)',
      },
    },
    {
      types: ['maybe-class-name'],
      style: {
        color: 'rgba(78, 201, 176, 1)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgba(79, 193, 255, 1)',
      },
    },
  ],
} satisfies PrismTheme;
