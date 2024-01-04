
     $(".anim-slider").animateSlider(
      {
        autoplay  :true,
        interval  :12000,
        animations  : 
        {
          0 :   //Slide No1
          {
            "#slide_1_img_1":
            {
              show    : "bounceInRight",
              hide    : "fadeOut",
              delayShow   : "delay1s"
            },

            h1  : 
            {
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-5s"
            },
            h2:
            {
              show    : "bounceInRight",
              hide    : "fadeOutDownBig",
              delayShow : "delay2s"
            },            
            p:
            {
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            } 
          },
          1 :   //Slide No2
          {
            "#slide_2_img_1":
            {
              show    : "bounceInUp",
              hide    : "fadeOut",
              delayShow   : "delay0-5s"
            },
            "#slide_2_img_2":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay1s"
            },
            "#slide_2_img_3":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay1-5s"
            },
            "#slide_2_img_4":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay2s"
            },

            h1  : 
            {
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-5s"
            },
            h2:
            {
              show    : "bounceInRight",
              hide    : "fadeOutDownBig",
              delayShow : "delay2s"
            },            
            p:
            {
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            } 
          },
          2 :   //Slide No3
          {
            "#slide_3_img_1":
            {
              show    : "bounceInUp",
              hide    : "fadeOut",
              delayShow   : "delay0-5s"
            },
            "#slide_3_img_2":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay1s"
            },            

            h1  : 
            {
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-5s"
            },
            h2:
            {
              show    : "bounceInRight",
              hide    : "fadeOutDownBig",
              delayShow : "delay2s"
            },            
            p:
            {
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            } 
          },
          3 :   //Slide No4
          {
            "#slide_4_img_1":
            {
              show    : "bounceInUp",
              hide    : "fadeOut",
              delayShow   : "delay0-5s"
            },
            "#slide_4_img_2":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay1s"
            },            

            h1  : 
            {
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-5s"
            },
            h2:
            {
              show    : "bounceInRight",
              hide    : "fadeOutDownBig",
              delayShow : "delay2s"
            },            
            p:
            {
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            } 
          },

          4 :   //Slide No5
          {
            "#slide_5_img_1":
            {
              show    : "bounceInUp",
              hide    : "fadeOut",
              delayShow   : "delay0-5s"
            },
            "#slide_5_img_2":
            {
              show    : "bounceInDown",
              hide    : "flipOutY",
              delayShow   : "delay1s"
            },
            "#slide_5_heading_1":{
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-6s"
            },            
            "#slide_5_heading_2":{
              show      : "bounceInLeft",
              hide    : "flipOutX",
              delayShow : "delay1-5s"
            },
            "#slide_5_list_1":{
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2s"
            },
            "#slide_5_list_2":{
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            },
            "#slide_5_list_3":{
              show    : "bounceInUp",
              hide    : "fadeOutLeftBig",
              delayShow : "delay2-5s"
            }

          }
          
          
          
        }
      });
