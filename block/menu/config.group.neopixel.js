module.exports = {
  name: "NeoPixel",
  index: 20,
  color: "65",
  icon: "/static/icons/icons8_workflow_128px.png",
  blocks: [
    {
      xml:
        `<block type="neopixel_rgb_begin">
                        <value name="PIN">
                            <shadow type="math_number">
                                <field name="NUM">12</field>
                            </shadow>
                        </value>
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">3</field>
                            </shadow>
                        </value>
                    </block>`
    },
    "neopixel_rgb_clear",
    // 'neopixel_rgb_show',
    {
      xml:
        `<block type="neopixel_rgb_setBrightness">
                        <value name="BRIGHT">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                    </block>`
    },
    "neopixel_rgb_fillLED",
    {
      xml:
        `<block type="neopixel_rgb_setPixelColor">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="neopixel_rgb_colorWipe">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="neopixel_rgb_theaterChase">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
    },
    "neopixel_rgb_rainbow_begin",
    {
      xml:
        `<block type="neopixel_rgb_rainbow">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
    },
    {
      xml:
        `<block type="neopixel_rgb_rainbowCycle">
                        <value name="TIME">
                            <shadow type="math_number">
                                <field name="NUM">20</field>
                            </shadow>
                        </value>
                    </block>`
    }
  ]
};
