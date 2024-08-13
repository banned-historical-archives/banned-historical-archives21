export default {
  entity: {
    id: 'c0600345-0734-45e8-9630-874b72da7b99',
    name: '为捍卫毛主席的无产阶级革命路线二奋斗终身',
    internal: false,
    type: 'img',
    official: false,
    author: '东兵',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c0600345-0734-45e8-9630-874b72da7b99/7.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '为捍卫毛主席的无产阶级革命路线二奋斗终身',
        authors: [
          '东兵',
        ],
        page_start: 1,
        page_end: 7,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
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
  path: 'c0600345-0734-45e8-9630-874b72da7b99',
  resource_type: 'book',
  version: 2,
};