interface file {
  /**
    * base64 string or a public accessible file url
  */
  url: string;
  /**
    * file name
  */
  name: string;
  /**
    * other file object options https://developer.mozilla.org/en-US/docs/Web/API/File/File
  */
  options?: any;
}

interface options {
  /**
    * custom document context, default: global document
  */
  documentContext?: any;
}

export { file, options };