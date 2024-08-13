export default {
  entity: {
    id: 'c147a76d-028e-469c-bcdc-4f3d3954b682',
    name: '周总理讲话',
    internal: false,
    type: 'img',
    official: false,
    author: '周恩来',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/11.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/12.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/c147a76d-028e-469c-bcdc-4f3d3954b682/13.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '周总理讲话',
        authors: [
          '周恩来',
        ],
        page_start: 1,
        page_end: 13,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
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
  path: 'c147a76d-028e-469c-bcdc-4f3d3954b682',
  resource_type: 'book',
  version: 2,
};