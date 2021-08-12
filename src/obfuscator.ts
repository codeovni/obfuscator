import * as crypto from "crypto-js";
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const root = fs.realpathSync('.');
const input:string = `${process.env.INPUT_FOLDER}`;
const output:string = `${process.env.OUTPUT_FOLDER}`;

/**
 *  Obfuscator class
 *
 * @class Obfuscator
 */
export default class Obfuscator {
    /**
     * Obfuscate all files from input folder to output folder
     *
     * @memberof Obfuscator
     */
    run() {

        console.log('Obfuscating files, please wait...\n');

        const folder    = fs.readdirSync(path.join(root, input));
        const files     = folder.filter(file => file.includes('.js'));

        let filesObfuscated = 0;

        /* Stop if no files to obfuscate */
        if(files.length == 0) {
            return console.log('No files found 🙃\n');
        }

        /* Obfuscate every file in input folder */
        for(let i = 0; i < files.length; i++) {

            /* Obfuscate file witht AES encrypt */
            fs.readFile(root + input + files[i], 'utf8', (err, fileContent) => {
                if(err) throw err;

                const obfucatedCode = crypto.AES.encrypt(fileContent, `${process.env.SECRET_KEY}`).toString();

                /* Create new file with obfuscated code */
                fs.writeFile(root + output + files[i], obfucatedCode, (err) => {
                    if(err) throw err;
                    console.log(`✔️  File [ ${files[i]} ] obfuscated!`);
                    filesObfuscated++;

                    /* Complete message with number of obfuscated files */
                    if(filesObfuscated == files.length) {
                        return console.log(`\n${filesObfuscated} files obfuscated!\nObfuscation completed 👍`);
                    }

                });
            });

        }

    }
    /**
     * Create folders if not exist
     *
     * @memberof Obfuscator
     */
    createFolders() {
        return new Promise((resolve, reject) => {
            if(!fs.existsSync(root + input)) {
                fs.mkdir(root + input, { recursive: true }, (err) => {
                    if(err) throw err;
                });
            }
            if(!fs.existsSync(root + output)) {
                fs.mkdir(root + output, { recursive: true }, (err) => {
                    if(err) throw err;
                });
            }
            resolve(true);
        });
    }

}