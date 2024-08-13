export default {
  entity: {
    id: '91ab8b47-a487-4e92-8cee-58a1d4e54f1c',
    name: '第一号紧急通令',
    internal: false,
    type: 'img',
    official: false,
    author: '全国中等学校革命教职工红色造反团上海分团',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/91ab8b47-a487-4e92-8cee-58a1d4e54f1c/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '第一号紧急通令',
        authors: [
          '全国中等学校革命教职工红色造反团上海分团',
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
            month: 1,
            day: 12,
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
  path: '91ab8b47-a487-4e92-8cee-58a1d4e54f1c',
  resource_type: 'book',
  version: 2,
};