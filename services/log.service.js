import chalk from 'chalk'
import dedent from 'dedent-js';
const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + msg);
}

const printHelp = () => {
  console.log(
    dedent(`
    ${chalk.bgCyan(' HELP ')}
    Без параметра - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `)
  );
}

const printWeather = (weather, icon) => {
  console.log(
    dedent`${chalk.bgYellow('WEATHER')}
    Город: ${weather.name}
    Скорость ветра: ${weather.wind.speed} м/с
    ${icon}  ${weather.weather[0].description}
    Температура: ${weather.main.temp_min} - ${weather.main.temp_max} (ощущается как ${weather.main.feels_like})`
  )
}

export { printError, printSuccess, printHelp, printWeather }
