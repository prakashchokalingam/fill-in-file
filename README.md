# fill-in-file [![npm version](http://img.shields.io/npm/v/fill-in-file.svg?style=flat-square&color=success)](https://www.npmjs.com/package/fill-in-file "View this project on npm")

A test util that helps to fill files in your file input element

### Usage

```
fillInFile('#input-element', { url: 'base64content', name: 'example.jpg' })
```

### How

https://dev.to/prakash_choks/codebytes-how-to-mock-upload-files-in-the-test-cases-1g87

### Variants

##### Simple mock
 ```
fillInFile('#input-element')
```
It automatically adds the [mock js-base64 image](https://github.com/prakashchokalingam/fill-in-file/blob/master/mock/base64.js) and triggers the onchange event.

##### String
 ```
fillInFile('#input-element', 'base64content')
  
  or 
 
fillInFile('#input-element', 'https://some-public-file-url.jpg');
```

##### Single file object
 ```
fillInFile('#input-element', { url: 'base64content', name: 'logo.jpg' });
  
  or 
 
fillInFile('#input-element', { url: 'https://some-public-file-url.jpg', name:  'profile.jpg' });
```
It adds the given file to the file input and triggers the onchange event.

##### Multiple files

 ```
 let files = [
   { url: 'base64content', name: 'logo.jpg' },
   { url: 'https://some-public-file-url.jpg', name:  'profile.jpg' }
 ];

fillInFile('#input-element', files);
```

### API

##### Method: [fillInFile](https://github.com/prakashchokalingam/fill-in-file/blob/master/src/index.ts#L17)

params:
|   name	|   type	| required  	|   description	|   	|
|:-:	|:-:	|:-:	|---	|---	|
|  domSelector 	|  string 	|   yes	|  dom query selector string for the input file element 	|   	|
|  files 	|  undefined - string - [file](https://github.com/prakashchokalingam/fill-in-file/blob/master/src/index.dto.ts) - [[file](https://github.com/prakashchokalingam/fill-in-file/blob/master/src/index.dto.ts)]	|   optional	|  file contents to be added to the file element 	| |
| options | [object](https://github.com/prakashchokalingam/fill-in-file/blob/master/src/index.dto.ts#L16) 	|  optional 	|   supports options like `documentContext` that lets you pass a custom document context, by default util uses global document	|   	|


### Examples

Qunit: https://prakashchokalingam.github.io/fill-in-file/examples/qunit.html

Mocha: https://prakashchokalingam.github.io/fill-in-file/examples/mocha.html

[![npm version](http://img.shields.io/npm/v/fill-in-file.svg?style=flat-square&color=success)](https://www.npmjs.com/package/fill-in-file "View this project on npm")
[![npm](https://img.shields.io/npm/dm/fill-in-file.svg?style=flat-square)](https://www.npmjs.com/package/fill-in-file)

