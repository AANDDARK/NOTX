// fileWatcher.js
const chokidar = require('chokidar');
import { readConfigFile, updateBundlerNameIfChanged, tomlFilePath } from './configSetting';

// Функція для відстеження всіх файлів у директорії
const watchAllFilesInDirectory = (directory) => {
    chokidar.watch(directory).on('all', (event, path) => {
        console.log(`File ${path} has been ${event}.`);
        
        // Якщо змінено TOML-файл, оновлюємо ім'я
        if (path === tomlFilePath) {
            const newConfig = readConfigFile(tomlFilePath);
            const newName = newConfig.bundler ? newConfig.bundler.name : 'default-name';
            updateBundlerNameIfChanged(newName);
        }
    });
};

// Запускаємо відстеження директорії
const directoryPath = './'; // Директорія для відстеження
watchAllFilesInDirectory(directoryPath);

// Виводимо початкову інформацію
const initialConfig = readConfigFile(tomlFilePath);
const initialName = initialConfig.bundler ? initialConfig.bundler.name : 'default-name';
console.log(`Initial bundler name: ${initialName}`);
