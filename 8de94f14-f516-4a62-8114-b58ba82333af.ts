export default {
  entity: {
    id: '8de94f14-f516-4a62-8114-b58ba82333af',
    name: '毛主席、林彪、陈伯达同志关于反对右倾机会主义的论述',
    internal: false,
    type: 'img',
    official: false,
    author: '毛泽东 林彪 陈伯达',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/8de94f14-f516-4a62-8114-b58ba82333af/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/8de94f14-f516-4a62-8114-b58ba82333af/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/8de94f14-f516-4a62-8114-b58ba82333af/3.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '毛主席、林彪、陈伯达同志关于反对右倾机会主义的论述',
        authors: [
          '毛泽东',
          '林彪',
          '陈伯达',
        ],
        page_start: 1,
        page_end: 3,
        ocr: {
          use_onnx: true,
          det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
          rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
        },
        dates: [
          {
            year: 1966,
            month: 10,
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
  path: '8de94f14-f516-4a62-8114-b58ba82333af',
  resource_type: 'book',
  version: 2,
};