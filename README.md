# CLI tool to convert a text file to a MP3 speech file

[GCP service](https://cloud.google.com/text-to-speech)

## Set up

```sh
npm i
```

1. Create a folder named `credential` at the root.
2. Place the GCP service credential JSON file in the `credential` folder.
3. Edit line 1 of `app.js` to set the path to your GCP service credential JSON file.

## Usage

```sh
node app.js
```

- The `input.txt` file is where you enter the text.
- The `output.mp3` file is the converted speech audio.
