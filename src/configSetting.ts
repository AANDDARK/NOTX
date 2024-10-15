const fs = require('fs');
const toml = require('@iarna/toml');

const tomlFilePath = 'notx.toml';

// Функція для читання TOML-файлу
const readConfigFile = (filePath) => {
    const tomlData = fs.readFileSync(filePath, 'utf8');
    return toml.parse(tomlData);
};

// Функція для оновлення імені в секції [bundler], якщо воно змінилося
const updateBundlerNameIfChanged = (newName) => {
    const config = readConfigFile(tomlFilePath);
    
    // Перевірка, чи ім'я змінилося
    if (config.bundler && config.bundler.name !== newName) {
        console.log(`Updating name from "${config.bundler.name}" to "${newName}"`);
        config.bundler.name = newName;
        fs.writeFileSync(tomlFilePath, toml.stringify(config), 'utf8');
    }
    
    // Виводимо нове ім'я
    console.log(`New name: ${newName}`);
};

// Експортуємо функції
module.exports = {
    readConfigFile,
    updateBundlerNameIfChanged,
    tomlFilePath
};
