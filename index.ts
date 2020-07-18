import { file, options }  from './fill-in-file.dto';

const DataTransfer: any = () => {
  return new ClipboardEvent('').clipboardData || new DataTransfer();
}

const getBlob: any= async (url: string) => {
  try {
    return await fetch(url).then(res => res.blob);
  } catch(e) {
    console.error('Fetching failed');
    throw new Error(e.stack);
  }
};

const fillInFile = async (domSelector: string, files: [file], options: options) => {
  const dataTransfer: DataTransfer = DataTransfer();

  // get element
  const $document: Document = options.documentContext || Document;
  const $element: HTMLInputElement = $document.querySelector(domSelector);
  if (!$element) {
    throw new Error(`Element not found, ${domSelector}`);
  }

  // create  file object
  for (const file of files) {
    const blob: Blob = await getBlob(file.url);
    const fileObject: File = new File([blob], file.name, file.options);

    // push to data transfer
    dataTransfer.items.add(fileObject)
  }

  // set files to element
  $element.files = dataTransfer.files;

  // trigger change event
  let changeEvent: Event = new Event('change');
  $element.dispatchEvent(changeEvent);

  return true;
};


export { fillInFile, getBlob, DataTransfer };