import Layout from '@theme/Layout';
import React, { JSX } from 'react';

interface SupportLink {
    title: string;
    summary: string;
    content: JSX.Element;
}

const supportLinks: SupportLink[] = [
    {
        title: 'Browse the docs',
        summary:
            "Find what you're looking for in our docs and guides: ",
        content: (
            <ul>
                <li>
                    Browse and <a href="/docs">get started</a> with
                    SpaceHub.
                </li>
                <li>
                    <a href="/docs/troubleshooting">Troubleshoot</a> problems with Metro.
                </li>
                <li>
                    Learn how to <a href="/docs/configuration">configure Metro</a>.
                </li>
                <li>
                    Look at the full <a href="/docs/api">API Reference</a>.
                </li>
            </ul>
        ),
    },
    {
        summary: 'Ask questions and find answers from other Metro users like you.',
        title: 'Join the community',
        content: (
            <ul>
                <li>
                    Join the{' '}
                    <a href="https://discordapp.com/channels/102860784329052160/103622435865104384">
                        #metro
                    </a>{' '}
                    channel on <a href="http://www.reactiflux.com/">Reactiflux</a>, a
                    Discord community.
                </li>
                <li>
                    Many members of the community use Stack Overflow. Read through the{' '}
                    <a href="https://stackoverflow.com/search?q=metro+bundler">
                        existing questions
                    </a>{' '}
                    or <a href="https://stackoverflow.com/questions/ask">ask your own</a>!
                </li>
            </ul>
        ),
    },
    {
        title: 'Stay up to date',
        summary: "Find out what's new with Metro.",
        content: (
            <ul>
                <li>
                    Follow <a href="https://twitter.com/MetroBundler">Metro</a> on
                    Twitter.
                </li>
                <li>
                    Browse our{' '}
                    <a href="https://github.com/facebook/metro/releases">
                        latest releases on GitHub
                    </a>
                    .
                </li>
            </ul>
        ),
    },
];

const Help: React.FC = () => {
    return (
        <Layout title="Help">
            <div className="container margin-vert--lg">
                <header className="postHeader">
                    <h1>Need help?</h1>
                </header>
                <p>
                    SpaceHub is worked on by <a target='_blank' href="https://github.com/kitiplex">
                        Kitiplex Engineering team
                    </a>. Team members are
                    often around and available for questions.
                </p>

                <div className="row">
                    {supportLinks.map(({ content, summary, title }, i) => (
                        <div
                            key={`help-column-${i}`}
                            className="col col--4 margin-vert--md"
                        >
                            <h2>{title}</h2>
                            <p>{summary}</p>
                            {content}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Help;
