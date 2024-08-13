export default {
  entity: {
    id: 'fc846088-9621-4371-818e-373be48942e3',
    name: '再论红卫兵要沿着正确的方向胜利地前进！——“怀疑一切万岁”是反动的',
    internal: false,
    type: 'img',
    official: false,
    author: '北京航空学院红卫兵',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fc846088-9621-4371-818e-373be48942e3/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '再论红卫兵要沿着正确的方向胜利地前进！——“怀疑一切万岁”是反动的',
        authors: [
          '北京航空学院红卫兵',
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
            month: 9,
            day: 24,
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
  path: 'fc846088-9621-4371-818e-373be48942e3',
  resource_type: 'book',
  version: 2,
};