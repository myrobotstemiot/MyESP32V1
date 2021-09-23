
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';
var motor_colour=Blockly.Msg.MUSIC_HUE ;
Blockly.Blocks['MyESP32_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor")
        .appendField(new Blockly.FieldDropdown([["A","1"], ["B","2"], ["A+B","3"]]),"Ch")
        .appendField("direction")
        .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Reverse","2"]]),"dir");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("Select motor /direction/ speed");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['MyESP32_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D14)","5"], ["A6 (D12)","6"], ["A7 (D13)","7"], ["A8 (D15)","8"], ["A9 (D2)","9"], ["A10 (D4)","10"]]), "ch");
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select servo to control.");
  }
};

Blockly.Blocks['MyESP32_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D14)","5"], ["A6 (D12)","6"], ["A7 (D13)","7"], ["A8 (D15)","8"], ["A9 (D2)","9"], ["A10 (D4)","10"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select servo to control.");
  }
};
Blockly.Blocks['MyESP32_motor_forward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Motor forward @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to drive.");
  }
};
Blockly.Blocks['MyESP32_motor_backward'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Motor backward @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to drive.");
  }
};
Blockly.Blocks['MyESP32_motor_forward2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Motor A+B")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Reverse", "2"]]),"dir");
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Speed[A]");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("Speed[B]");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['MyESP32_motor_backward2'] = {
  init: function() {
    this.appendValueInput("speed1")
      .setCheck("Number")
      .appendField("Move Backward left wheel at speed");
    this.appendDummyInput()
      .appendField("%");
      this.appendValueInput("speed2")
      .setCheck("Number")
      .appendField("and right wheel at speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("");
  }
};
Blockly.Blocks['MyESP32_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Turn")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("@speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_Spin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Rotate")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("@speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_Spin_Time'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Rotate")
      .appendField(new Blockly.FieldDropdown([["Left","0"], ["Right", "1"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("@speed");
    this.appendDummyInput()
      .appendField("%");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField("delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_turn_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Left @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn left a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_turn_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Turn Right @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Turn right a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_spin_left'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Rotate Left @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate ro spin left a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_spin_right'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("Rotate Right @speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Rotate ro spin right a robot.");
  }
};
Blockly.Blocks['MyESP32_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop all");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Stop all motor.");
  }
};
Blockly.Blocks['MyESP32_motor_stop_ch'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Stop motor CH:")
      .appendField(new Blockly.FieldDropdown([["A","1"], ["B","2"], ["All","3"]]), "ch")
    this.appendDummyInput()
      .appendField("status")
      .appendField(new Blockly.FieldDropdown([["Break","0"], ["Stop","1"]]), "status")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select motor to stop.");
  }
};

Blockly.Blocks['Run_following_of_line'] = {
  init: function() {
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("line following @speed:");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(motor_colour);
    this.setTooltip("Select speed for line following.");
  }
};

}
