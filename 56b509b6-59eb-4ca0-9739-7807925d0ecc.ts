export default {
  entity: {
    id: '56b509b6-59eb-4ca0-9739-7807925d0ecc',
    name: '张春桥同志接见我们时的谈话摘录',
    internal: false,
    type: 'img',
    official: false,
    author: '张春桥',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/56b509b6-59eb-4ca0-9739-7807925d0ecc/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '张春桥同志接见我们时的谈话摘录',
        authors: [
          '张春桥',
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
            day: 27,
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
  path: '56b509b6-59eb-4ca0-9739-7807925d0ecc',
  resource_type: 'book',
  version: 2,
};