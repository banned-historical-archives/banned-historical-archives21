export default {
  entity: {
    id: '868a640b-5b4a-4e58-8fd5-e3b81927d184',
    name: '十月九日周恩来和张春桥同志谈话纪要',
    internal: false,
    type: 'img',
    official: false,
    author: '周恩来 张春桥',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/868a640b-5b4a-4e58-8fd5-e3b81927d184/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/868a640b-5b4a-4e58-8fd5-e3b81927d184/2.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '十月九日周恩来和张春桥同志谈话纪要',
        authors: [
          '周恩来',
          '张春桥',
        ],
        page_start: 1,
        page_end: 2,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
            day: 9,
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
  path: '868a640b-5b4a-4e58-8fd5-e3b81927d184',
  resource_type: 'book',
  version: 2,
};