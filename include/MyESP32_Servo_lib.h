#include "MyESP32_Servo.h"
#define _servo0 32
#define _servo1 33
#define _servo2 25
#define _servo3 26
#define _servo4 27
#define _servo5 14
#define _servo6 12
#define _servo7 13
#define _servo8 15
#define _servo9 2
#define _servo10 4

#ifndef ALL
#define ALL 100
#endif

Servo servo0;
Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;
Servo servo6;
Servo servo7;
Servo servo8;
Servo servo9;
Servo servo10;

void servo(uint8_t servo, int16_t angle)
{
  if (servo == ALL)
  {
    if (angle == -1)
    {
      servo0.detach();
	  servo1.detach();
      servo2.detach();
      servo3.detach();
	  servo4.detach();
	  servo5.detach();
	  servo6.detach();
	  servo7.detach();
	  servo8.detach();
	  servo9.detach();
	  servo10.detach();
    }
    else
    {
      if (!(servo0.attached()))
      {
        servo0.attach(_servo1);
      }
      servo0.write(angle);

      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);

	  if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);

      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);

      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
	  
	  if (!(servo5.attached()))
      {
        servo5.attach(_servo5);
      }
      servo5.write(angle);
	  
	  if (!(servo6.attached()))
      {
        servo6.attach(_servo6);
      }
      servo6.write(angle);
	  
	  if (!(servo7.attached()))
      {
        servo7.attach(_servo7);
      }
      servo7.write(angle);

	  if (!(servo8.attached()))
      {
        servo8.attach(_servo5);
      }
      servo8.write(angle);
	  
	  if (!(servo9.attached()))
      {
        servo9.attach(_servo6);
      }
      servo9.write(angle);
	  
	  if (!(servo10.attached()))
      {
        servo10.attach(_servo7);
      }
      servo10.write(angle);
    }
  }
  if (servo == 0)
  {
    if (angle == -1)
    {
      servo0.detach();
    }
    else
    {
      if (!(servo0.attached()))
      {
        servo0.attach(_servo0);
      }
      servo0.write(angle);
    }
  }

    if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }

  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  
  if (servo == 3)
  {
    if (angle == -1)
    {
      servo3.detach();
    }
    else
    {
      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);
    }
  }
  
  if (servo == 4)
  {
    if (angle == -1)
    {
      servo4.detach();
    }
    else
    {
      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
  
  
  if (servo == 5)
  {
    if (angle == -1)
    {
      servo5.detach();
    }
    else
    {
      if (!(servo5.attached()))
      {
        servo5.attach(_servo5);
      }
      servo5.write(angle);
    }
  }
  
  if (servo == 6)
  {
    if (angle == -1)
    {
      servo6.detach();
    }
    else
    {
      if (!(servo6.attached()))
      {
        servo6.attach(_servo6);
      }
      servo6.write(angle);
    }
  }
  
  if (servo == 7)
  {
    if (angle == -1)
    {
      servo7.detach();
    }
    else
    {
      if (!(servo7.attached()))
      {
        servo7.attach(_servo7);
      }
      servo7.write(angle);
    }
  }
  
  if (servo == 8)
  {
    if (angle == -1)
    {
      servo8.detach();
    }
    else
    {
      if (!(servo8.attached()))
      {
        servo8.attach(_servo8);
      }
      servo8.write(angle);
    }
  }

  if (servo == 9)
  {
    if (angle == -1)
    {
      servo9.detach();
    }
    else
    {
      if (!(servo9.attached()))
      {
        servo9.attach(_servo9);
      }
      servo9.write(angle);
    }
  }

  if (servo == 10)
  {
    if (angle == -1)
    {
      servo10.detach();
    }
    else
    {
      if (!(servo10.attached()))
      {
        servo10.attach(_servo10);
      }
      servo10.write(angle);
    }
  }

}
//Cr. Inex