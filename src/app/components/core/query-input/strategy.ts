import { StrategyProps } from '@textcomplete/core';

import { startsWith } from './options';

const CODEBLOCK = /`{3}/g;
const INLINECODE = /`/g;

export const EMOJI_STRATEGY: StrategyProps = {
    id: 'emoji',
    // match: /\B([\-+\w]*)$/,
    match: /([a-zA-Z]+)$/,
    search: async (term, callback) => {
        callback(await startsWith(term));
    },
    replace: ([key]) => `${key} `,
    template: ([key, url]) => key,
    context: (text): boolean => {
        return true;
    },
};
