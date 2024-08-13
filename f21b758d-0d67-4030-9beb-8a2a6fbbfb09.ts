export default {
  entity: {
    id: 'f21b758d-0d67-4030-9beb-8a2a6fbbfb09',
    name: '周总理在首都大专院校司令部全体红卫兵战士大会上的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '周恩来',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/f21b758d-0d67-4030-9beb-8a2a6fbbfb09/7.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '周总理在首都大专院校司令部全体红卫兵战士大会上的讲话',
        authors: [
          '周恩来',
        ],
        page_start: 1,
        page_end: 7,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 9,
            day: 10,
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
  path: 'f21b758d-0d67-4030-9beb-8a2a6fbbfb09',
  resource_type: 'book',
  version: 2,
};