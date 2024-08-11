export default {
  "entity": {
    "id": "bc790ef9-2b1a-4b40-86d0-ed2310a40c24",
    "name": "江青同志的重要讲话",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "江青",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/bc790ef9-2b1a-4b40-86d0-ed2310a40c24/1.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "江青同志的重要讲话",
        "authors": [
          "江青"
        ],
        "page_start": 1,
        "page_end": 1,
        "ocr": {
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": [
          {
            "year": 1967,
            "month": 7,
            "day": 22
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
  "path": "bc790ef9-2b1a-4b40-86d0-ed2310a40c24",
  "resource_type": "book",
  "version": 2
}