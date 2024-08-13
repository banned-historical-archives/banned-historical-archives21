export default {
  entity: {
    id: '01d6f73e-211d-449b-928b-e162e4767897',
    name: '打倒反革命分裂主义者耿金章',
    internal: false,
    type: 'img',
    official: false,
    author: '褚锦芳',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/01d6f73e-211d-449b-928b-e162e4767897/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '打倒反革命分裂主义者耿金章',
        authors: [
          '褚锦芳',
        ],
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
            month: 2,
            day: 26,
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
  path: '01d6f73e-211d-449b-928b-e162e4767897',
  resource_type: 'book',
  version: 2,
};