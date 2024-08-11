export default {
  "entity": {
    "id": "fb0132e1-351b-4ab3-9c51-1fd7143f445d",
    "name": "周总理口头指示",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "周恩来",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fb0132e1-351b-4ab3-9c51-1fd7143f445d/1.jpg",
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/fb0132e1-351b-4ab3-9c51-1fd7143f445d/2.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "周总理口头指示",
        "authors": [
          "周恩来"
        ],
        "page_start": 1,
        "page_end": 2,
        "ocr": {
          "use_onnx": true,
          "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
          "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
        },
        "dates": []
      }
    ],
    "ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "fb0132e1-351b-4ab3-9c51-1fd7143f445d",
  "resource_type": "book",
  "version": 2
}