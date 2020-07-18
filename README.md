# fill-in-file
A test util which helps to mock file upload for file input elements

### Usage

```
fillInFile('#input-element', { url: 'base64content', name: 'example.jpg' })
```

### Variants

 ##### Simple mock
 ```
fillInFile('#input-element')
```
It will automatically add the [mock js-base64 image](https://github.com/prakashchokalingam/fill-in-file/blob/master/mock/base64.js) and will trigger the onchange event.

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
It will add the given file to the file input and will trigger the onchange event.

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
| options | [object](https://github.com/prakashchokalingam/fill-in-file/blob/master/src/index.dto.ts#L16) 	|  optional 	|   supports options like `documentContext` so that you can pass custom document context, by default util will use global document	|   	|


### Examples

Qunit: https://prakashchokalingam.github.io/fill-in-file/examples/qunit.html

Mocha: https://prakashchokalingam.github.io/fill-in-file/examples/mocha.html
