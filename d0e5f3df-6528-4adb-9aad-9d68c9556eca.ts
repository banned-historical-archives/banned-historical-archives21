export default {
  entity: {
    id: 'd0e5f3df-6528-4adb-9aad-9d68c9556eca',
    name: '砸烂刘邓反革命专政，跟着毛主席干一辈子革命！——陈里宁在清华大学井冈山兵团红教工召开的“控诉刘邓反革命专政大会”上的发言',
    internal: false,
    type: 'img',
    official: false,
    author: '陈里宁',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/d0e5f3df-6528-4adb-9aad-9d68c9556eca/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/d0e5f3df-6528-4adb-9aad-9d68c9556eca/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/d0e5f3df-6528-4adb-9aad-9d68c9556eca/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/d0e5f3df-6528-4adb-9aad-9d68c9556eca/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '砸烂刘邓反革命专政，跟着毛主席干一辈子革命！——陈里宁在清华大学井冈山兵团红教工召开的“控诉刘邓反革命专政大会”上的发言',
        authors: [
          '陈里宁',
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
            year: 1967,
            month: 1,
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
  path: 'd0e5f3df-6528-4adb-9aad-9d68c9556eca',
  resource_type: 'book',
  version: 2,
};