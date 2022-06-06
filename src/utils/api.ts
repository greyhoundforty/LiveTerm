import axios from 'axios';
import config from '../../config.json';


export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

export const getLogRoll = async () => {
  const { data } = await axios.get('https://rst-quest-hugo-app.nwuwak1821j.us-south.codeengine.appdomain.cloud/index.xml');
  return {
    logroll: `“${data}"`,
  };
};

// export const getLogRoll = async () => {
//   let Parser = require('rss-parser');
//   let parser = new Parser();
//   let feed = await parser.parseURL('https://rst-quest-hugo-app.nwuwak1821j.us-south.codeengine.appdomain.cloud/index.xml');

//   feed.items.forEach(item => {
//     return (item.title + ':' + item.link)
//   });

// };