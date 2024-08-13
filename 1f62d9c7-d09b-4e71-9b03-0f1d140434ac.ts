export default {
  entity: {
    id: '1f62d9c7-d09b-4e71-9b03-0f1d140434ac',
    name: '王力、关锋接见山东大学红卫兵谈话记录',
    internal: false,
    type: 'img',
    official: false,
    author: '王力 关锋',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/1f62d9c7-d09b-4e71-9b03-0f1d140434ac/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/1f62d9c7-d09b-4e71-9b03-0f1d140434ac/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/1f62d9c7-d09b-4e71-9b03-0f1d140434ac/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/1f62d9c7-d09b-4e71-9b03-0f1d140434ac/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '王力、关锋接见山东大学红卫兵谈话记录',
        authors: [
          '王力',
          '关锋',
        ],
        page_start: 1,
        page_end: 4,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 9,
            day: 3,
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
  path: '1f62d9c7-d09b-4e71-9b03-0f1d140434ac',
  resource_type: 'book',
  version: 2,
};