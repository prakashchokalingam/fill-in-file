var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { JS_BASE64_PNG } from '../mock/base64.js';
var DT = function () {
    return new ClipboardEvent('').clipboardData || new DataTransfer();
};
var getBlob = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetch(url).then(function (res) { return res.blob(); })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                e_1 = _a.sent();
                console.error('Fetching failed');
                throw new Error(e_1.stack);
            case 3: return [2 /*return*/];
        }
    });
}); };
var fillInFile = function (domSelector, files, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var $document, $element, dataTransfer, addFile, _a, _i, files_1, file, changeEvent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    $document = options.documentContext || document;
                    $element = $document.querySelector(domSelector);
                    if (!$element) {
                        throw new Error("Element not found, " + domSelector);
                    }
                    dataTransfer = DT();
                    addFile = function (file) { return __awaiter(void 0, void 0, void 0, function () {
                        var blob, fileObject;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getBlob(file.url)];
                                case 1:
                                    blob = _a.sent();
                                    fileObject = new File([blob], file.name, file.options);
                                    // push to data transfer
                                    dataTransfer.items.add(fileObject);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    _a = typeof files;
                    switch (_a) {
                        case 'object': return [3 /*break*/, 1];
                        case 'string': return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 11];
                case 1:
                    if (!Array.isArray(files)) return [3 /*break*/, 6];
                    _i = 0, files_1 = files;
                    _b.label = 2;
                case 2:
                    if (!(_i < files_1.length)) return [3 /*break*/, 5];
                    file = files_1[_i];
                    return [4 /*yield*/, addFile(file)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, addFile(files)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3 /*break*/, 13];
                case 9: return [4 /*yield*/, addFile({ url: files, name: 'sample.jpg' })];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 11: 
                // mock file
                return [4 /*yield*/, addFile({ url: JS_BASE64_PNG, name: 'javascript.png' })];
                case 12:
                    // mock file
                    _b.sent();
                    _b.label = 13;
                case 13:
                    // set files to element
                    $element.files = dataTransfer.files;
                    changeEvent = new Event('change');
                    $element.dispatchEvent(changeEvent);
                    return [2 /*return*/, true];
            }
        });
    });
};
export { fillInFile, getBlob, DT };
