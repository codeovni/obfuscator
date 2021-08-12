# 🔒 Obfuscator
This is a simple javascript code obfuscator using [crypto-js](https://github.com/brix/crypto-js). You just have to put a javascript file `.js` in the `obfuscate` folder and run the application `npm run start`. You will get a new file in the `result` folder with the same name and with the obfuscated code. You can add all the files you want to obfuscate at once.

# How to obfuscate files
### 1. Install packages
```shell
npm install
```

### 2. Build application
```shell
npm run build
```

### 3. Create a secret key
Rename `.env.example` to `.env` and write a secret key.
```shell
SECRET_KEY=your_secret_key_here
# Example secret key: CcYeuPjW5pwGBmIw9CaGbosX9N1IPjbZ
```

### 4. Files to obfuscate
Put the files you want to obfuscate into the `obfuscate` folder.

### 5. Start application
```shell
npm run start
```

# Other info

### Input file (obfuscate/example.js)
```js
function example() {
    const one = 1;
    const two = 2;
    const result = one + two;
    console.log(result);
}
```

### Output file (result/example.js)
```
U2FsdGVkX1+i4g4AQ+PUVfa5ZZbQJe1GfxH5SUXorIaIGw4/AAT6xiZbMHcGz8bz6vyqzSBh+KYzHcbb+8xIUl9KMrKJX8Afp4ezZCJB6cOBAgOA5PHXwf+Gzdcjm29zEF+qgqqInExg9nXMAXtNPJR50jyarwjOAjgKr59AmL+xlAyTE0FONCUHMSLyjpaq
```

### Decrypt code with crypto-js
> To decrypt code you must use the same secret key with which you have obfuscate the file.
```js
const obfuscatedCode = 'U2FsdGVkX1+i4g4AQ+PUVfa5ZZbQJe1GfxH5SUXorIaIGw4/AAT6xiZbMHcGz8bz6vyqzSBh+KYzHcbb+8xIUl9KMrKJX8Afp4ezZCJB6cOBAgOA5PHXwf+Gzdcjm29zEF+qgqqInExg9nXMAXtNPJR50jyarwjOAjgKr59AmL+xlAyTE0FONCUHMSLyjpaq';

var bytes = CryptoJS.AES.decrypt(obfuscatedCode, 'your secret key');
var originalCode = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalCode);
```

### 📚 Libs used
- [crypto-js](https://github.com/brix/crypto-js)