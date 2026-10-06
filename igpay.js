import readline from 'readline';

const VOWELS = 'aeiouy';

function isVowel(character) {
  return VOWELS.includes(character.toLocaleLowerCase());
}

function translateWord(word) {
  if (word.length === 0) {
    return word;
  }

  if (isVowel(word[0])) {
    return `${word}yay`;
  }

  let vowelIndex = -1;

  for (let i = 0; i < word.length; i += 1) {
    if (isVowel(word[i])) {
      vowelIndex = i;
      break;
    }
  }

  if (vowelIndex === -1) {
    return `${word}ay`;
  }

  const consonants = word.slice(0, vowelIndex);
  const remainder = word.slice(vowelIndex);

  return `${remainder + consonants.toLowerCase()}ay`;
}

function preserveCapitalization(original, translated) {
  if (original === original[0].toUpperCase()) {
    return translated[0].toUpperCase() + translated.slice(1);
  }

  return translated;
}

// /[a-zA-Z]+(?:['’][a-zA-Z]+)?|[0-9]+/g is a regular expression basically saying
// find either a word (optionally containing an apostrophe) OR a sequence of digits,
// everywhere in the string.

function translateLine(line) {
  return line.replace(
    /[a-zA-Z]+(?:['’][a-zA-Z]+)?|[0-9]+/g,
    (token) => {
      if (/^[0-9]+$/.test(token)) {
        return token;
      }

      const translated = translateWord(token);

      return preserveCapitalization(token, translated);
    },
  );
}

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

readlineInterface.on('line', (line) => {
  console.log(translateLine(line));
});
