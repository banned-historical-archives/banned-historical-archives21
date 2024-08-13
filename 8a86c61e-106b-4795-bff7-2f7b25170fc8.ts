export default {
  entity: {
    id: '8a86c61e-106b-4795-bff7-2f7b25170fc8',
    name: '一九六六年十月十八日游行口号',
    internal: false,
    type: 'img',
    official: false,
    author: '',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/8a86c61e-106b-4795-bff7-2f7b25170fc8/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '一九六六年十月十八日游行口号',
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
            year: 1966,
            month: 10,
            day: 18,
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
  path: '8a86c61e-106b-4795-bff7-2f7b25170fc8',
  resource_type: 'book',
  version: 2,
};