Blockly.defineBlocksWithJsonArray([
    {
      "type": "play_sound",
      "message0": "Play %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ["A", "sounds/c5.mp3"], //used
            ["B", "sounds/d4-2.mp3"],
            ["C", "sounds/e4.m4a"],
            ["D", "sounds/f4-2.mp3"],
            ["E", "sounds/g5.mp3"], //used
            ["F", "sounds/a5.mp3"], //used
            ["G", "sounds/b5.m4a"],
            ["H", "sounds/b5.m4a"],
            ["I", "sounds/c4.mp3"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 322,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);

  // Translation of this blok in JavaScript
Blockly.JavaScript['play_sound'] = function(block) {
  var value = '\'' + block.getFieldValue('VALUE') + '\'';
  return 'MusicMaker.queueSound(' + value + ');\n';
};