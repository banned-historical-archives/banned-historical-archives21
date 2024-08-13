export default {
  entity: {
    id: 'd093d7ac-4767-4e1b-be3e-d444380c98ef',
    name: '给毛主席的致敬信',
    internal: false,
    type: 'img',
    official: false,
    author: '',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/d093d7ac-4767-4e1b-be3e-d444380c98ef/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '给毛主席的致敬信',
        authors: [],
        page_start: 1,
        page_end: 1,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1967,
            month: 9,
            day: 28,
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
  path: 'd093d7ac-4767-4e1b-be3e-d444380c98ef',
  resource_type: 'book',
  version: 2,
};