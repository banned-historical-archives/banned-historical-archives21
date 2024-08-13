export default {
  entity: {
    id: '0cca0258-1a9d-4625-8a60-d7ac9fed12f1',
    name: '周恩来总理西安工业学院造反队二十四位同学的电话',
    internal: false,
    type: 'img',
    official: false,
    author: '周恩来',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/0cca0258-1a9d-4625-8a60-d7ac9fed12f1/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/0cca0258-1a9d-4625-8a60-d7ac9fed12f1/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/0cca0258-1a9d-4625-8a60-d7ac9fed12f1/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/0cca0258-1a9d-4625-8a60-d7ac9fed12f1/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/0cca0258-1a9d-4625-8a60-d7ac9fed12f1/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '周恩来总理西安工业学院造反队二十四位同学的电话',
        authors: [
          '周恩来',
        ],
        page_start: 1,
        page_end: 5,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: '0cca0258-1a9d-4625-8a60-d7ac9fed12f1',
  resource_type: 'book',
  version: 2,
};