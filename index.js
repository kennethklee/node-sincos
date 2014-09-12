/*
 * This is based off this article: http://lab.polygonal.de/?p=205
 */

var sin = exports.sin = function(rad) {
    var sine;

    if (rad < 0) {
        sine = rad * (1.27323954 + .405284735 * rad);
    } else {
        sine = rad * (1.27323954 - 0.405284735 * rad);
    }

    if (sine < 0) {
        sine = sine * (-0.225 * (sine + 1) + 1);
    } else {
        sine = sine * (0.225 * (sine - 1) + 1);
    }
    return sine;
};

var cos = exports.cos = function(rad) {
    return sin(rad + 1.57079632);
};
