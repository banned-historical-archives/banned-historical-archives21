export default {
  entity: {
    id: '90026db3-c08e-4178-8ba8-9dd862963597',
    name: '给各级造反组织的几项建议',
    internal: false,
    type: 'img',
    official: false,
    author: '上海市《五四》革命造反总联络站',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/90026db3-c08e-4178-8ba8-9dd862963597/1.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '给各级造反组织的几项建议',
        authors: [
          '上海市《五四》革命造反总联络站',
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
            year: 1967,
            month: 1,
            day: 30,
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
  path: '90026db3-c08e-4178-8ba8-9dd862963597',
  resource_type: 'book',
  version: 2,
};