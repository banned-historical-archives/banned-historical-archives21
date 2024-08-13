export default {
  entity: {
    id: 'b3b55963-df69-4e62-aafe-0172f2d45f72',
    name: '中央文革办公室陈军民同志对有关无产阶级文化大革命几个问题的回答',
    internal: false,
    type: 'img',
    official: false,
    author: '陈军民',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b3b55963-df69-4e62-aafe-0172f2d45f72/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b3b55963-df69-4e62-aafe-0172f2d45f72/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b3b55963-df69-4e62-aafe-0172f2d45f72/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b3b55963-df69-4e62-aafe-0172f2d45f72/4.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '中央文革办公室陈军民同志对有关无产阶级文化大革命几个问题的回答',
        authors: [
          '陈军民',
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
            day: 17,
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
  path: 'b3b55963-df69-4e62-aafe-0172f2d45f72',
  resource_type: 'book',
  version: 2,
};