export default {
  entity: {
    id: '90fc89cc-6d2f-452f-9fd9-471b892d47ec',
    name: '走访人民日报编辑部',
    internal: false,
    type: 'img',
    official: false,
    author: '',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/90fc89cc-6d2f-452f-9fd9-471b892d47ec/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/90fc89cc-6d2f-452f-9fd9-471b892d47ec/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/90fc89cc-6d2f-452f-9fd9-471b892d47ec/3.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '走访人民日报编辑部',
        authors: [],
        page_start: 1,
        page_end: 3,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
            day: 14,
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
  path: '90fc89cc-6d2f-452f-9fd9-471b892d47ec',
  resource_type: 'book',
  version: 2,
};