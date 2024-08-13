export default {
  entity: {
    id: '950e9df4-aa2c-4029-aaf2-fd60037b0bf9',
    name: '十月七日访问中共中央接待站记录整理',
    internal: false,
    type: 'img',
    official: false,
    author: '沈立国 杨永星 杨登国',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/950e9df4-aa2c-4029-aaf2-fd60037b0bf9/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '十月七日访问中共中央接待站记录整理',
        authors: [
          '沈立国',
          '杨永星',
          '杨登国',
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
            month: 10,
            day: 7,
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
  path: '950e9df4-aa2c-4029-aaf2-fd60037b0bf9',
  resource_type: 'book',
  version: 2,
};