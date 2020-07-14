process.env["GOOGLE_APPLICATION_CREDENTIALS"] =
  "/Users/Noah/workspace/node/text-2-speech/credential/[filename]";

const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

async function quickStart() {
  // The text to synthesize
  const readFile = util.promisify(fs.readFile);
  const text = await readFile("input.txt", "utf8");

  //   Construct the request
  const request = {
    input: { text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent, "binary");
  console.log("Audio content written to file: output.mp3");
}
quickStart();
