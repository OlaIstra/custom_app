console.log("module.js");

async function start() {
  return await Promise.resolve("done");
}

start().then((res) => console.log(res));
