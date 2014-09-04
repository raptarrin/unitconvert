/**
 * Created by L.Ribeiro on 7/8/2014.
 */


    function cmConverter(){
    document.converter.inch.value = document.converter.cm.value / 2.54;
    document.converter.feet.value = document.converter.cm.value / 30.48;
    document.converter.km.value = document.converter.cm.value / 100000;
    document.converter.mile.value = document.converter.cm.value / 160934
    document.converter.lightyear.value = document.converter.cm.value / 946080000000000000;
    document.converter.parsec.value = document.converter.cm.value / 3085677581310000000;
    }
    function inchConverter(){
    document.converter.cm.value = document.converter.inch.value * 2.54;
    document.converter.feet.value = document.converter.inch.value / 12;
    document.converter.mile.value = document.converter.inch.value / 63360;
    document.converter.lightyear.value = document.converter.inch.value / 372469718092929000;
    document.converter.parsec.value = document.converter.inch.value / 1214833693430000000;
    document.converter.km.value = document.converter.inch.value / 39370.1;
    }
    function feetConverter(){
    document.converter.cm.value = document.converter.feet.value * 30.48;
    document.converter.inch.value = document.converter.feet.value * 12;
    document.converter.km.value = document.converter.feet.value / 3280.84;
    document.converter.mile.value = document.converter.feet.value / 5280;
    document.converter.parsec.value = document.converter.feet.value / 101236141119000000;
    document.converter.lightyear.value = document.converter.feet.value / 31038479000000000;
    }
function kmConverter() {
    document.converter.cm.value = document.converter.km.value * 100000;
    document.converter.inch.value = document.converter.km.value * 39370.1;
    document.converter.feet.value = document.converter.km.value * 3280.84;
    document.converter.mile.value = document.converter.km.value / 1.60934;
    document.converter.lightyear.value = document.converter.km.value / 9460730472580;
    document.converter.parsec.value = document.converter.km.value / 30856775813100;
}
    function mileConverter(){
    document.converter.feet.value = document.converter.mile.value * 5280;
    document.converter.inch.value = document.converter.mile.value * 63360;
    document.converter.cm.value = document.converter.mile.value * 160934;
    document.converter.km.value = document.converter.mile.value * 1.60934;
    document.converter.lightYear.value = document.converter.mile.value / 5878000000000;
    document.converter.parsec.value = document.converter.mile.value / 19173511575600;
    }

    function lightyearConverter(){
    document.converter.feet.value = document.converter.lightyear.value * 31038479000000000;
    document.converter.inch.value = document.converter.lightyear.value * 372469718092929000;
    document.converter.cm.value = document.converter.lightyear.value * 946080000000000000;
    document.converter.mile.value = document.converter.lightyear.value * 5878000000000;
    document.converter.km.value = document.converter.lightyear.value * 9460730472580;
    document.converter.parsec.value = document.converter.lightyear.value / 3.26;
    }

function parsecConverter () {
    document.converter.inch.value = document.converter.parsec.value * 1214833693430000000;
    document.converter.cm.value = document.converter.parsec.value * 3085677581310000000;
    document.converter.feet.value = document.converter.parsec.value * 101236141119000000;
    document.converter.km.value = document.converter.parsec.value * 30856775813100;
    document.converter.mile.value = document.converter.parsec.value * 19173511575600;
    document.converter.lightyear.value = document.converter.parsec.value * 3.26;
}

