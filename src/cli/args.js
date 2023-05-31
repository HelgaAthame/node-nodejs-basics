const parseArgs = () => {
  const arr = process.argv;
  let str = '';
  for (let i = 2; i < arr.length; i = i + 2) {

    if (i < arr.length - 2) {
      str = str.concat(arr[i].slice(2) + ' is ' + arr[i + 1] + ', ');
    } else {
      str = str.concat(arr[i].slice(2) + ' is ' + arr[i + 1]);
    }
  }
  console.log(str);
};

parseArgs();
