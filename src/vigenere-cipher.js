class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const messageChar = messageUpper[i];
      const messageCharIndex = this.alphabet.indexOf(messageChar);

      if (messageCharIndex === -1) {
        result += messageChar;
        continue;
      }

      const keyChar = keyUpper[keyIndex % keyUpper.length];
      const keyCharIndex = this.alphabet.indexOf(keyChar);

      const encryptedCharIndex = (messageCharIndex + keyCharIndex) % this.alphabet.length;
      const encryptedChar = this.alphabet[encryptedCharIndex];

      result += encryptedChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessageUpper.length; i++) {
      const encryptedChar = encryptedMessageUpper[i];
      const encryptedCharIndex = this.alphabet.indexOf(encryptedChar);

      if (encryptedCharIndex === -1) {
        result += encryptedChar;
        continue;
      }

      const keyChar = keyUpper[keyIndex % keyUpper.length];
      const keyCharIndex = this.alphabet.indexOf(keyChar);

      const messageCharIndex = (encryptedCharIndex - keyCharIndex + this.alphabet.length) % this.alphabet.length;
      const messageChar = this.alphabet[messageCharIndex];

      result += messageChar;
      keyIndex++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
