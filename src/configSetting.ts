import fs from 'fs';
import toml from '@iarna/toml';

export const tomlFilePath = 'notx.toml';

// function for read tonl file
export const readConfigFile = (filePath) => {
    const tomlData = fs.readFileSync(filePath, 'utf8');
    return toml.parse(tomlData);
};

// function for update name  in toml config [bundler], if it is changed
export const updateBundlerNameIfChanged = (newName) => {
    const config = readConfigFile(tomlFilePath);
    
    // Перевірка, чи ім'я змінилося
    if (config.bundler && config.bundler.name !== newName) {
        console.log(`Updating name from "${config.bundler.name}" to "${newName}"`);
        config.bundler.name = newName;
        fs.writeFileSync(tomlFilePath, toml.stringify(config), 'utf8');
    }
    
    // log new name
    console.log(`New name: ${newName}`);
};

// export function
module.exports = {
    readConfigFile,
    updateBundlerNameIfChanged,
    tomlFilePath
};
