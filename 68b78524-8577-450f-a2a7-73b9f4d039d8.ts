export default {
  entity: {
    id: '68b78524-8577-450f-a2a7-73b9f4d039d8',
    name: '国务院访问纪要',
    internal: false,
    type: 'img',
    official: false,
    author: '周金柱',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/68b78524-8577-450f-a2a7-73b9f4d039d8/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/68b78524-8577-450f-a2a7-73b9f4d039d8/2.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '国务院访问纪要',
        authors: [
          '周金柱',
        ],
        page_start: 1,
        page_end: 2,
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
  path: '68b78524-8577-450f-a2a7-73b9f4d039d8',
  resource_type: 'book',
  version: 2,
};