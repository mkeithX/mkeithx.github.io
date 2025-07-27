import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.dracula;

export default {
  plain: {
    color: 'rgb(248, 248, 242)',
    backgroundColor: 'rgb(40, 42, 54)',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: 'rgb(86, 156, 214)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['property', 'parameter'],
      style: {
        color: 'rgb(156, 220, 254)',
      },
    },
    {
      types: ['script'],
      style: {
        color: 'rgb(212, 212, 212)',
      },
    },
    {
      types: ['boolean', 'arrow', 'atrule', 'tag'],
      style: {
        color: 'rgb(86, 156, 214)',
      },
    },
    {
      types: ['number', 'color', 'unit'],
      style: {
        color: 'rgb(181, 206, 168)',
      },
    },
    {
      types: ['font-matter'],
      style: {
        color: 'rgb(206, 145, 120)',
      },
    },
    {
      types: ['keyword', 'rule'],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic",
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
        color: 'rgb(78, 201, 176)',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(79, 193, 255)',
      },
    },
  ],
} satisfies PrismTheme;
