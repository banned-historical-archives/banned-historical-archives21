export default {
  "entity": {
    "id": "dc1bc143-76c5-42ab-bf42-f227c626f143",
    "name": "关锋同志的讲话",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "关锋",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/dc1bc143-76c5-42ab-bf42-f227c626f143/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/dc1bc143-76c5-42ab-bf42-f227c626f143/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "关锋同志的讲话",
        "authors": [
          "关锋"
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
            "day": 7
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
  "path": "dc1bc143-76c5-42ab-bf42-f227c626f143",
  "resource_type": "book",
  "version": 2
}