const suggestions: [string, string][] = [
    ['Select', 'select'],
    ['*', '*'],
    ['FROM', 'from'],
    ['Order', 'order'],
    ['Category', 'category'],
    ['Customer', 'customer'],
    ['Employee', 'employee'],
    ['Product', 'product'],
    ['Region', 'region'],
    ['shipper', 'shipper'],
    ['Supplier', 'supplier'],
]

export const startsWith = async (
    term: string,
    limit = 10,
): Promise<[string, string][]> => {
    const results: [string, string][] = [];
    const matchedSuggestions = suggestions.filter(([key]) => key.toLowerCase().includes(term?.toLowerCase()));
    if (matchedSuggestions.length) {
        results.push(...matchedSuggestions);
    }
    return matchedSuggestions;
};
