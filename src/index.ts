import { file, options } from './index.dto';
import { JS_BASE64_PNG } from '../mock/base64.js';

const DT: any = () => {
  return new ClipboardEvent('').clipboardData || new DataTransfer();
}

const getBlob: any = async (url: string) => {
  try {
    return await fetch(url).then(res => res.blob());
  } catch (e) {
    console.error('Fetching failed');
    throw new Error(e.stack);
  }
};

const fillInFile = async (
  domSelector: string,
  files: file | [file] | string,
  options: options = {}
) => {
  // get element
  const $document: Document = options.documentContext || document;
  const $element: HTMLInputElement = $document.querySelector(domSelector);
  if (!$element) {
    throw new Error(`Element not found, ${domSelector}`);
  }

  const dataTransfer: DataTransfer = DT();

  const addFile = async (file) => {
    // create  blob object
    const blob: Blob = await getBlob(file.url);

    // create  file object
    const fileObject: File = new File([blob], file.name, file.options);

    // push to data transfer
    dataTransfer.items.add(fileObject);
  };


  switch (typeof files) {
    case 'object':
      if (Array.isArray(files)) {
        for (const file of files) {
          await addFile(file);
        }
      } else {
        await addFile(files);
      }
      break;

    case 'string':
      await addFile({ url: files, name: 'sample.jpg' });
      break;

    default:
      // mock file
      await addFile({ url: JS_BASE64_PNG, name: 'javascript.png' });
  }

  // set files to element
  $element.files = dataTransfer.files;

  // trigger change event
  let changeEvent: Event = new Event('change');
  $element.dispatchEvent(changeEvent);

  return true;
};

export { fillInFile, getBlob, DT };