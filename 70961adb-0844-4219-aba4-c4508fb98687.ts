export default {
  "entity": {
    "id": "70961adb-0844-4219-aba4-c4508fb98687",
    "name": "中共中央、国务院、中央军委、中央文革布告",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "中共中央 国务院 中央军委 中央文革",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/70961adb-0844-4219-aba4-c4508fb98687/1.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "中共中央、国务院、中央军委、中央文革布告",
        "authors": [
          "中共中央",
          "国务院",
          "中央军委",
          "中央文革"
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
            "year": 1968,
            "month": 7,
            "day": 3
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
  "path": "70961adb-0844-4219-aba4-c4508fb98687",
  "resource_type": "book",
  "version": 2
}