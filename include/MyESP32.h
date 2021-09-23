#include <FS.h>                   //this needs to be first, or it all crashes and burns...
#include <SPIFFS.h>
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <memory>
#include <Wire.h>  
#include <esp_wifi.h>
#include <SPI.h>

//#include "SSD1306Wire.h"
//#include "SH1106.h"
#include "MyESP32_Motor_drive.h"
#include "MyESP32_Servo_lib.h"
#include "MyESP32_IO.h"
#include "Adafruit_TCS34725.h"
//#include "Adafruit_TCS34725.h"
//#include "PCF8574.h"

#include "vector"
#define TONE_CHANNEL 1
static const uint8_t KB_BUZZER = 14;
#define BUZZER_PIN 23
#define SOUND_PWM_CHANNEL 0
#define SOUND_RESOLUTION 8
#define SOUND_ON (1 << (SOUND_RESOLUTION - 1))
#define SOUND_OFF 0

//PCF8574 botton(0x20);
unsigned long timeElapsed;

SSD1306Wire display(0x3c, 21, 22);

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);

//Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);

#define M1A 16
#define M1B 17
#define M2A 18
#define M2B 19
#define A0 32
#define A1 33
#define A2 25
#define A3 26
#define A4 27
#define A5 14
#define A6 12
#define A7 13
#define A8 15
#define A9 2
#define A10 4
#define A11  36
int TCS_init = 0;

void wait();
void beep();
// int TCS_Read(int C=1);


class KB_music
{
 public:
  void begin(void);
  void tone(unsigned int frequency, unsigned long duration = 0);
  void noTone();
  void song(std::vector<int> notes,int duration);

 protected:
  uint16_t channel;
  uint16_t bit;

 private:
};



void KB_music::begin(void) {
    //ledcSetup(TONE_CHANNEL, 5000, 13);
}

void KB_music::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(KB_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        delay(duration);
        noTone();
    }
}

void KB_music::noTone()
{
    ledcDetachPin(KB_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void KB_music::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}

KB_music music = KB_music();

void tone(int pin, int frequency, int duration) {
  ledcSetup(0, frequency, 8);
  ledcAttachPin(pin, 0);
  ledcWrite(0, SOUND_ON);
  delay(duration);
  ledcWrite(0, SOUND_OFF);
}

void MyESP32(){

  Serial.begin(115200);
  music.begin();
  pinMode(34,INPUT);
  pinMode(35,INPUT);
  pinMode(23,OUTPUT);
  
  // Read sensor for 0-1023 (2^10=1024)
  analogReadResolution(10); 
  
  display.init();
  display.flipScreenVertically();
 
  display.setFont(ArialMT_Plain_16);
  display.drawString(25,0,"MyESP32");
  display.drawString(30,20,"www.myrobotstem.com");
  display.drawString(25,40,"Version 1.5.0");
  display.display();
  delay(1000);
  
  
 // botton.pinMode(P1, INPUT); // สวิท 1
 // botton.pinMode(P2, INPUT); // สวิท 2
//botton.pinMode(sw_A, INPUT); // สวิท 1
//botton.pinMode(sw_B, INPUT); // สวิท 2
  
  pinMode(39, INPUT); // Knob
  //botton.pinMode(5, OUTPUT); // LED default ON [Ready}

  //botton.begin();
  
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  
  ledcSetup(12, 5000, 8);
  ledcSetup(13, 5000, 8);
  ledcSetup(14, 5000, 8);
  ledcSetup(15, 5000, 8);
  
  ledcAttachPin(M1A, 12);
  ledcAttachPin(M1B, 13);
  ledcAttachPin(M2A, 14);
  ledcAttachPin(M2B, 15);
  if (tcs.begin()) {
     Serial.println("Found sensor");
  }
//
//  if (tcs.begin()) {
//     Serial.println("Found Color sensor");
//  }
//  
  for(int i=0;i<3;i++){
	  digitalWrite(5, LOW);
	  delay(200);
	  digitalWrite(5, HIGH);
	  delay(200);
  }
  
  // Splash Screen //
  for (int i = 120; i >= -80; i -= 20) {
    display.clear();
    display.setFont(ArialMT_Plain_24);
    display.drawString(i, 15, String("Ready!"));
    display.display();
    delay(100);
  }
  
  display.clear();
  /*display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("Button A"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  delay(1000);
  // End Splash Screen //
  */
  
  beep();
  //wait();
}

void wait(){
  // Press for button [A] press //
  display.clear();
  display.setFont(ArialMT_Plain_16);
  display.drawString(20,  0, String("Press!"));
  display.drawString(20, 20, String("Button [A]"));
  display.drawString(20, 40, String("to continue."));
  display.display();
  
  int Button_A = 0;
  do{
	Button_A = digitalRead(34);
  }while(!Button_A);
  // End - Press for button [A] press //
}

/*
int TCS_Read(int C=1){
  uint16_t nofilter, red, green, blue;
  //delay(200);
  tcs.getRawData(&red, &green, &blue, &nofilter);
	
  uint32_t sum = nofilter;
  float r, g, b;
  r = red; r /= sum;
  g = green; g /= sum;
  b = blue; b /= sum;
  r *= 256; g *= 256; b *= 256;
  
  //Serial.print("C:\t"); Serial.print(nofilter);
  //Serial.print("\tR:\t"); Serial.print((int)r);
  //Serial.print("\tG:\t"); Serial.print((int)g);
  //Serial.print("\tB:\t"); Serial.print((int)b);
  //Serial.println();
  
  if(C==1) return (int)r;
  else if(C==2) return (int)g;
  else if(C==3) return (int)b;
}
*/

#define _knob 39
int _Knob(){
  return analogRead(_knob);
}
void beep(){
  int _buzzer = 23;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200);
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 23;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
void beep_on(){
  int _buzzer = 23;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 23;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}
float TCS_Read(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
   float average_lib, r_lib, g_lib, b_lib;
   //delay(100); // Farbmessung dauert c. 50ms 
   tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
   average_lib = (red_lib+green_lib+blue_lib)/3;
   r_lib = red_lib/average_lib;
   g_lib = green_lib/average_lib;
   b_lib = blue_lib/average_lib;
   if(color_of_sensor == 0){
    return r_lib*100;
   }
   else if(color_of_sensor == 1){
    return g_lib*100;
   }
    else if(color_of_sensor == 2){
    return b_lib*100;
   }
 }
float ultrasonic(int ECHO,int TRIG){
  pinMode(ECHO,INPUT);
  pinMode(TRIG,OUTPUT);
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH);
  // Calculating the distance
  return duration*0.034/2;
}