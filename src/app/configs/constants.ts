const regexp = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
};

const frameworks =  ['angular', 'react', 'vue'];

const versions: { [key: string]: string[] } = {
    angular: ['1.1.1', '1.2.1', '1.3.3'],
    react: ['2.1.2', '3.2.4', '4.3.1'],
    vue: ['3.3.1', '5.2.1', '5.1.3'],
};

export {
  regexp,
  frameworks,
  versions,
};

