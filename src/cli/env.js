const parseEnv = () => {
  process.env.RSS_arg1 = 'value1';
  process.env.RSS_arg2 = 'value2';
  let str = '';
  for (let key in process.env) {
    if (/^RSS_/.test(key)) {
      str = str.concat(`${key}=${process.env[key]}; `);
    }
  }
  console.log(str);
};

parseEnv();
