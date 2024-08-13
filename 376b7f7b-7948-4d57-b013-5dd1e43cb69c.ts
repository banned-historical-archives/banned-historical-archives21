export default {
  entity: {
    id: '376b7f7b-7948-4d57-b013-5dd1e43cb69c',
    name: '周总理在九月十三日晚九点钟接见首都大专院校红卫兵第二司令部代表时的报告',
    internal: false,
    type: 'img',
    official: false,
    author: '周恩来',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/376b7f7b-7948-4d57-b013-5dd1e43cb69c/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/376b7f7b-7948-4d57-b013-5dd1e43cb69c/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/376b7f7b-7948-4d57-b013-5dd1e43cb69c/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/376b7f7b-7948-4d57-b013-5dd1e43cb69c/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '周总理在九月十三日晚九点钟接见首都大专院校红卫兵第二司令部代表时的报告',
        authors: [
          '周恩来',
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
            day: 13,
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
  path: '376b7f7b-7948-4d57-b013-5dd1e43cb69c',
  resource_type: 'book',
  version: 2,
};