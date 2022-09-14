var Body = {
    setBackgroundColor : function ( color ) {
         document.querySelector('body').style.backgroundColor = color;
        //$('body').css('backgroundColor', color);
        },
    setColor : function ( color ) {
         document.querySelector('body').style.color = color;
        //$('body').css('color', color);
        }
}

var Rink = {
    setColor : function ( color ){
         var alist = document.querySelectorAll('a');
         var i = 0;

         while( i < alist.length ){
             alist[i].style.color = color
             i = i+1;
         }
        //$('a').css('color', color);
    }
}

var Border = {
    bottomSetColor : function (color){
         document.querySelector('h1').style.borderBottomColor = color;
        //$('h1').css('borderBottomColor', color);
    },
    rightSetColor : function (color){
        document.querySelector('#grid ol').style.borderRightColor= color;
        //$('#grid ol').css('borderRightColor', color);
    }
}

function nightDayHandler(self) {

    if(self.value === 'night'){
    
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day'

    Rink.setColor('yellow');

    Border.bottomSetColor('white');
    Border.rightSetColor('white');

    }else{

    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night'
    
    Rink.setColor('blue');

    Border.bottomSetColor('black');
    Border.rightSetColor('black');

    }
}