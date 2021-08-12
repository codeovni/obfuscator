import Obfuscator from './obfuscator';

const obfuscator = new Obfuscator();

/* Run obfuscator app*/
obfuscator.createFolders().then(() => obfuscator.run());