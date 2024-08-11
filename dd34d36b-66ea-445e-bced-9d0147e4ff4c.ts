export default {
  "entity": {
    "id": "dd34d36b-66ea-445e-bced-9d0147e4ff4c",
    "name": "刘志坚同志的讲话",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "刘志坚",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/dd34d36b-66ea-445e-bced-9d0147e4ff4c/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/dd34d36b-66ea-445e-bced-9d0147e4ff4c/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "刘志坚同志的讲话",
        "authors": [
          "刘志坚"
        ],
        "page_start": 1,
        "page_end": 2,
        "ocr": {
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": [
          {
            "year": 1966,
            "month": 10,
            "day": 15
          }
        ]
      }
    ],
    "ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "dd34d36b-66ea-445e-bced-9d0147e4ff4c",
  "resource_type": "book",
  "version": 2
}