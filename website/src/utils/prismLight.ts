import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.github;

export default {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: 'rgba(5, 80, 174, 1)',
        fontWeight: 'bold',
      },
    },
    {
      types: ['parameter'],
      style: {
        color: 'rgba(149, 56, 0, 1)',
      },
    },
    {
      types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
      style: {
        color: 'rgba(0, 92, 197, 1)',
      },
    },
    {
      types: ['atrule', 'tag'],
      style: {
        color: 'rgba(34, 134, 58, 1)',
      },
    },
    {
      types: ['script'],
      style: {
        color: 'rgba(36, 41, 46, 1)',
      },
    },
    {
      types: ['operator', 'unit', 'rule'],
      style: {
        color: 'rgba(215, 58, 73, 1)',
      },
    },
    {
      types: ['font-matter', 'string', 'attr-value'],
      style: {
        color: 'rgba(198, 16, 95, 1)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgba(17, 99, 41, 1)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgba(5, 80, 174, 1)',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: 'rgba(207, 34, 46, 1)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgba(130, 80, 223, 1)',
      },
    },
    {
      types: ['selector'],
      style: {
        color: 'rgba(111, 66, 193, 1)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgba(227, 98, 9, 1)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgba(107, 107, 107, 1)',
      },
    },
  ],
} satisfies PrismTheme;
