// Check if currentPath is a string and has an includes method
export const isLinkActive = (url, currentPath) => typeof currentPath === 'string' && currentPath.includes(url);

