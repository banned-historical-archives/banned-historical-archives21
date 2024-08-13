export default {
  entity: {
    id: '29d8deca-a57d-4cda-b341-472b6e00ae48',
    name: '廖承志同志1966年9月13日在北大的讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '廖承志',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/29d8deca-a57d-4cda-b341-472b6e00ae48/6.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '廖承志同志1966年9月13日在北大的讲话',
        authors: [
          '廖承志',
        ],
        page_start: 1,
        page_end: 6,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 9,
            day: 13,
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
  path: '29d8deca-a57d-4cda-b341-472b6e00ae48',
  resource_type: 'book',
  version: 2,
};