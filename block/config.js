let display = require("./menu/config.group.display");
let neopixel = require("./menu/config.group.neopixel");
let buzzer = require("./menu/config.group.buzzer");
// let common = require("./menu/config.group.common");
let gpio = require("./menu/config.group.gpio");
let sdcard = require("./menu/config.group.sdcard");
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  //language=HTML format=false
  blocks: [
    gpio,
    display,
    {
      override : true,
      name: "MyESP32",
      index: 50,
      color: "230",
      icon: `file:///${dirIcon}/static/icons/robot.png`,
      blocks: [
          {
              xml:
                  `<block type="MyESP32_motor">
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
            xml : 
            `<block type="MyESP32_motor_forward2">
                <value name="speed1">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
                <value name="speed2">
                    <shadow type="math_number">
                        <field name="NUM">50</field>
                    </shadow>
                </value>
            </block>`
          },
          {
              xml:
                  `<block type="MyESP32_motor_turn">
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP32_motor_Spin">
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP32_motor_Spin_Time">
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                        <value name="time">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP32_motor_stop_ch">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP32_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="MyESP32_servo2">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
          //'MyESP32_motor_stop',
          
          // {
          //     xml:
          //         `<block type="MyESP32_motor_forward">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          // {
          //     xml:
          //         `<block type="MyESP32_motor_backward">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          
          // {
          //     xml:
          //         `<block type="MyESP32_motor_turn_left">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          // {
          //     xml:
          //         `<block type="MyESP32_motor_turn_right">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          // {
          //     xml:
          //         `<block type="MyESP32_motor_spin_left">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          // {
          //     xml:
          //         `<block type="MyESP32_motor_spin_right">
          //               <value name="speed">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          
          // {
          //     xml:
          //         `<block type="MyESP32_motor_backward2">
          //               <value name="speed1">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //               <value name="speed2">
          //                   <shadow type="math_number">
          //                       <field name="NUM">50</field>
          //                   </shadow>
          //               </value>
          //           </block>`
          // },
          
      ]
  },
    {
      override : true,
      name: "Time",
      index: 50,
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [
          {
              xml:
                  `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          "time_millis",
          "time_micros"
      ]
  },
    {
      override : true,
      name: " Sensor",
      index: 50,
      color: "230",
      icon: "/static/icons/icons8_thermometer_96px.png",
      blocks: [
          'Light sensor',
          'TCS_read_rgb',
          'Switch sensor',
          'LDR sensor',
          'Distance sensor',
          'Soil moisture sensor',
          'dhtesp_setup_MyESP32',
          'dhtesp_read_temp_MyESP32',
          'dhtesp_read_humid_MyESP32',
          'Ultrasonic sensor',
          'ds18b20_init_MyESP32',
          {
                xml:
                   `<block type="ds18b20_get_temperature_MyESP32">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
          'IRremote_sensor',
      ]
  },
  ],
};
