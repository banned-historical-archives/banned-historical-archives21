export default {
  entity: {
    id: '28b46a95-8ce9-4e2c-84a2-3082268e4268',
    name: '陈毅副总理的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '陈毅',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/28b46a95-8ce9-4e2c-84a2-3082268e4268/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/28b46a95-8ce9-4e2c-84a2-3082268e4268/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/28b46a95-8ce9-4e2c-84a2-3082268e4268/3.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '陈毅副总理的讲话',
        authors: [
          '陈毅',
        ],
        page_start: 1,
        page_end: 3,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1967,
            month: 8,
            day: 30,
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
  path: '28b46a95-8ce9-4e2c-84a2-3082268e4268',
  resource_type: 'book',
  version: 2,
};