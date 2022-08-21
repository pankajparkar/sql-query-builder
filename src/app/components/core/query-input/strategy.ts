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
        // const blockmatch = text.match(CODEBLOCK);
        // if (blockmatch && blockmatch.length % 2) {
        //     // Cursor is in a code block
        //     return false;
        // }
        // const inlinematch = text.match(INLINECODE);
        // if (inlinematch && inlinematch.length % 2) {
        //     // Cursor is in a inline code
        //     return false;
        // }
        // return true;
        return true;
    },
};
