export default {
  entity: {
    id: 'fd46b687-cae4-476d-855b-2362d9c21256',
    name: '八月廿二日陶铸同志在人大和外地同学的谈话',
    internal: false,
    type: 'img',
    official: false,
    author: '陶铸',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fd46b687-cae4-476d-855b-2362d9c21256/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fd46b687-cae4-476d-855b-2362d9c21256/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fd46b687-cae4-476d-855b-2362d9c21256/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fd46b687-cae4-476d-855b-2362d9c21256/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fd46b687-cae4-476d-855b-2362d9c21256/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '八月廿二日陶铸同志在人大和外地同学的谈话',
        authors: [
          '陶铸',
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
            month: 8,
            day: 22,
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
  path: 'fd46b687-cae4-476d-855b-2362d9c21256',
  resource_type: 'book',
  version: 2,
};