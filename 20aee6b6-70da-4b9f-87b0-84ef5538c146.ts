export default {
  entity: {
    id: '20aee6b6-70da-4b9f-87b0-84ef5538c146',
    name: '关于贯彻国务院调整部分工人和工作人员工资通知的教育提纲',
    internal: false,
    type: 'img',
    official: false,
    author: '山东省革命委员会政治部',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/20aee6b6-70da-4b9f-87b0-84ef5538c146/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/20aee6b6-70da-4b9f-87b0-84ef5538c146/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/20aee6b6-70da-4b9f-87b0-84ef5538c146/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/20aee6b6-70da-4b9f-87b0-84ef5538c146/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/20aee6b6-70da-4b9f-87b0-84ef5538c146/5.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '关于贯彻国务院调整部分工人和工作人员工资通知的教育提纲',
        authors: [
          '山东省革命委员会政治部',
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
            year: 1971,
            month: 12,
            day: 15,
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
  path: '20aee6b6-70da-4b9f-87b0-84ef5538c146',
  resource_type: 'book',
  version: 2,
};