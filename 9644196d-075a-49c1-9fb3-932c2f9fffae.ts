export default {
  entity: {
    id: '9644196d-075a-49c1-9fb3-932c2f9fffae',
    name: '张平化同志八月三十一日晚在湖大的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '张平化',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/9644196d-075a-49c1-9fb3-932c2f9fffae/9.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '张平化同志八月三十一日晚在湖大的讲话',
        authors: [
          '张平化',
        ],
        page_start: 1,
        page_end: 9,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 8,
            day: 31,
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
  path: '9644196d-075a-49c1-9fb3-932c2f9fffae',
  resource_type: 'book',
  version: 2,
};