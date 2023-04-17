import fs from "fs";

export const read_file = (file_name) => {
  return JSON.parse(fs.readFileSync(`./model/${file_name}`, "utf8"));
};

export const write_file = (file_name, data) => {
  return fs.writeFileSync(
    `./model/${file_name}`,
    JSON.stringify(data, null, 4),
    (err) => {
      if (err) throw err;
      console.log("Created!");
    }
  );
};
