export default {
  "entity": {
    "id": "098f0f47-5c1b-445e-b94b-f5a1b02cfc3a",
    "name": "周总理、张春桥同志十月九日晚七点半同清华各红卫兵组织座谈要点",
    "internal": false,
    "type": "imgs",
    "official": false,
    "author": "周恩来 张春桥",
    "files": [
      "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives21/main/098f0f47-5c1b-445e-b94b-f5a1b02cfc3a/1.jpg"
    ]
  },
  "parser_option": {
    "articles": [
      {
        "title": "周总理、张春桥同志十月九日晚七点半同清华各红卫兵组织座谈要点",
        "authors": [
          "周恩来",
          "张春桥"
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
            "year": 1966,
            "month": 10,
            "day": 9
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
  "path": "098f0f47-5c1b-445e-b94b-f5a1b02cfc3a",
  "resource_type": "book",
  "version": 2
}