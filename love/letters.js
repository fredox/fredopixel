// Archivo js con todas las letras mapeadas
// cada caracter es un "cuadro/pixel".
// Cada número representa un color.

var letters = new Array;
var letterWidth = new Array;

// Márgenes superiores para las letras
var letterMarginTop = new Array;

letterMarginTop.f = 0;
letterMarginTop.r = 0;
letterMarginTop.e = 0;
letterMarginTop.d = 0;
letterMarginTop.o = 0;
letterMarginTop.p = 3;
letterMarginTop.i = 0;
letterMarginTop.x = 0;
letterMarginTop.l = 0;
letterMarginTop.h = 0;


// Las letras y su mapeado.

letters.r  = "00000";
letters.r += "00000";
letters.r += "11000";
letters.r += "11111";
letters.r += "11111";
letters.r += "11011";
letters.r += "11011";
letters.r += "11011";
letters.r += "11000";
letters.r += "11000";
letters.r += "11000";
letters.r += "11000";
letters.r += "11000";
letters.r += "11000";
letters.r += "11000";

letterWidth.r = 5;

letters.e  = "00000";
letters.e += "00000";
letters.e += "00000";
letters.e += "11111";
letters.e += "11111";
letters.e += "11011";
letters.e += "11011";
letters.e += "11011";
letters.e += "11011";
letters.e += "11011";
letters.e += "11111";
letters.e += "11000";
letters.e += "11000";
letters.e += "11000";
letters.e += "11111";

letterWidth.e = 5;

letters.d  = "00011";
letters.d += "00011";
letters.d += "00011";
letters.d += "11111";
letters.d += "11111";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11011";
letters.d += "11111";

letterWidth.d = 5;

letters.o  = "00000";
letters.o += "00000";
letters.o += "00000";
letters.o += "11111";
letters.o += "11111";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11011";
letters.o += "11111";

letterWidth.o = 5;

letters.f  = "11111";
letters.f += "11111";
letters.f += "11111";
letters.f += "11111";
letters.f += "11000";
letters.f += "11000";
letters.f += "11000";
letters.f += "11000";
letters.f += "11110";
letters.f += "11110";
letters.f += "11000";
letters.f += "11000";
letters.f += "11000";
letters.f += "11000";
letters.f += "11000";

letterWidth.f = 5;

letters.i  = "00";
letters.i += "00";
letters.i += "00";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";
letters.i += "11";

letterWidth.i = 2;

letters.p  = "11111";
letters.p += "11111";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11011";
letters.p += "11111";
letters.p += "11000";
letters.p += "11000";
letters.p += "11000";

letterWidth.p = 5;

letters.x  = "00000";
letters.x += "00000";
letters.x += "00000";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "01110";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";
letters.x += "11011";

letterWidth.x = 5;

letters.l  = "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";
letters.l += "11";

letterWidth.l = 2;

letters.h  = "003333000333300";
letters.h += "033333303333330";
letters.h += "333233333333333";
letters.h += "332333333333333";
letters.h += "332333333333333";
letters.h += "332333333333333";
letters.h += "033333333333330";
letters.h += "033333333333330";
letters.h += "003333333333300";
letters.h += "000333333333000";
letters.h += "000033333330000";
letters.h += "000003333300000";
letters.h += "000000333000000";
letters.h += "000000030000000";

letterWidth.h = 15;






