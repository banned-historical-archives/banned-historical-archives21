export default {
  entity: {
    id: 'b01bdf67-c66d-4cca-860c-1a4ecae79be7',
    name: '九月八日在人民大会堂接见部分来京革命串联同志时康生同志的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '康生',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b01bdf67-c66d-4cca-860c-1a4ecae79be7/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b01bdf67-c66d-4cca-860c-1a4ecae79be7/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b01bdf67-c66d-4cca-860c-1a4ecae79be7/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b01bdf67-c66d-4cca-860c-1a4ecae79be7/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/b01bdf67-c66d-4cca-860c-1a4ecae79be7/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '九月八日在人民大会堂接见部分来京革命串联同志时康生同志的讲话',
        authors: [
          '康生',
        ],
        page_start: 1,
        page_end: 5,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 9,
            day: 8,
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
  path: 'b01bdf67-c66d-4cca-860c-1a4ecae79be7',
  resource_type: 'book',
  version: 2,
};