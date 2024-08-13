export default {
  entity: {
    id: '567180a4-4f3c-4676-9b94-c76d8ef62fe6',
    name: '张春桥、关锋同志的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '张春桥 关锋',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/567180a4-4f3c-4676-9b94-c76d8ef62fe6/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/567180a4-4f3c-4676-9b94-c76d8ef62fe6/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/567180a4-4f3c-4676-9b94-c76d8ef62fe6/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/567180a4-4f3c-4676-9b94-c76d8ef62fe6/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/567180a4-4f3c-4676-9b94-c76d8ef62fe6/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '张春桥、关锋同志的讲话',
        authors: [
          '张春桥',
          '关锋',
        ],
        page_start: 1,
        page_end: 5,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
            day: 7,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: '567180a4-4f3c-4676-9b94-c76d8ef62fe6',
  resource_type: 'book',
  version: 2,
};