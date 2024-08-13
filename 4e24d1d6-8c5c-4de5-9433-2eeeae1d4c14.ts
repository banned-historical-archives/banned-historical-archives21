export default {
  entity: {
    id: '4e24d1d6-8c5c-4de5-9433-2eeeae1d4c14',
    name: '党的阶级路线是什么——访中共中央接待站',
    internal: false,
    type: 'img',
    official: false,
    author: '',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/4e24d1d6-8c5c-4de5-9433-2eeeae1d4c14/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '党的阶级路线是什么——访中共中央接待站',
        authors: [],
        page_start: 1,
        page_end: 1,
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
  path: '4e24d1d6-8c5c-4de5-9433-2eeeae1d4c14',
  resource_type: 'book',
  version: 2,
};