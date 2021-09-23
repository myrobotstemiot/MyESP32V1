module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["adc_pin_dummy_input"] = {
    init: function() {
      
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["ADC_MyESP32"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Analog")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "A0"],
                                              ["A1 (33)", "A1"],
                                              ["A2 (25)", "A2"],
                                              ["A3 (26)", "A3"],
                                              ["A4 (27)", "A4"],
                                              ["A5 (14)", "A5"],
                                              ["A6 (12)", "A6"],
                                              ["A7 (13)", "A7"],
                                              ["A8 (15)", "A8"],
                                              ["A9 (2)", "A9"],
                                              ["A10 (4)", "A10"],
                                              ["A11 (36)", "A11"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["IN_MyESP32"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IN")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (14)", "14"],
                                              ["A6 (12)", "12"],
                                              ["A7 (13)", "13"],
                                              ["A8 (15)", "15"],
                                              ["A9 (2)", "2"],
                                              ["A10 (4)", "4"],
                                              ["A11 (36)", "32"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["IN_PULLUP_MyESP32"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IN_PULLUP")
          .appendField(new Blockly.FieldDropdown([
                                             ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (14)", "14"],
                                              ["A6 (12)", "12"],
                                              ["A7 (13)", "13"],
                                              ["A8 (15)", "15"],
                                              ["A9 (2)", "2"],
                                              ["A10 (4)", "4"],
                                              ["A11 (36)", "32"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OUT_MyESP32'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OUT")
        .appendField(new Blockly.FieldDropdown([
                                                ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (14)", "14"],
                                              ["A6 (12)", "12"],
                                              ["A7 (13)", "13"],
                                              ["A8 (15)", "15"],
                                              ["A9 (2)", "2"],
                                              ["A10 (4)", "4"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("");
    }
  };
   Blockly.Blocks['Buzzer_MyESP32'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer status")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "status")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
    }
  };
  Blockly.Blocks['Knob_MyESP32'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Knob Status");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(90);
   this.setTooltip("get SW1 pressed or not");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["SW_MyESP32"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Switch ")
          .appendField(new Blockly.FieldDropdown([
                                              ["A (34)", "34"],
                                              ["B (35)", "35"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

  
  

};

