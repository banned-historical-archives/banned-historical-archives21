export default {
  entity: {
    id: 'c2156ce7-375a-4525-a1d8-0b04436733e2',
    name: '告全国革命公民书',
    internal: false,
    type: 'img',
    official: false,
    author: '北京四十九中学激洪流战斗小组',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c2156ce7-375a-4525-a1d8-0b04436733e2/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '告全国革命公民书',
        authors: [
          '北京四十九中学激洪流战斗小组',
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
            year: 1966,
            month: 8,
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
  path: 'c2156ce7-375a-4525-a1d8-0b04436733e2',
  resource_type: 'book',
  version: 2,
};