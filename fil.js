var txt = document.getElementById("PAR").style;

function ChangeFont(font) {
    switch (font) {
        case "arial":
            txt.fontFamily = "arial";
            break;
        case "courier":
            txt.fontFamily = "courier";
            break;
        case "georgia":
            txt.fontFamily = "georgia";
            break;
        case "impact":
            txt.fontFamily = "impact";
            break;
        case "times new roman":
            txt.fontFamily = "times new roman";
            break;
        case "verdana":
            txt.fontFamily = "verdana";
            break;

    }
}

function ChangeAlign(alig) {
    switch (alig) {
        case "left":
            txt.textAlign = alig;
            break;
        case "center":
            txt.textAlign = alig;
            break;
        case "right":
            txt.textAlign = alig;
            break;
        case "justify":
            txt.textAlign = alig;
            break;
    }
}

function ChangeHeight(height) {
    switch (height) {
        case "normal":
            txt.lineHeight = height;
            break;
        case "10px":
            txt.lineHeight = height;
            break;
        case "15px":
            txt.lineHeight = height;
            break;
        case "1.5":
            txt.lineHeight = height;
            break;


    }
}

function ChangeLSpace(sp) {
    switch (sp) {
        case "normal":
            txt.letterSpacing = sp;
            break;
        case "-1px":
            txt.letterSpacing = sp;
            break;
        case "2px":
            txt.letterSpacing = sp;
            break;
        case "3px":
            txt.letterSpacing = sp;
            break;

    }
}

function ChangeIndent(ch_ind) {
    switch (ch_ind) {
        case "0px":
            txt.textIndent = ch_ind;
            break;
        case "5px":
            txt.textIndent = ch_ind;
            break;
        case "15px":
            txt.textIndent = ch_ind;
            break;
        case "25px":
            txt.textIndent = ch_ind;
            break;

    }

}

function ChangeTransform(ch_tr) {
    switch (ch_tr) {
        case "none":
            txt.textTransform = ch_tr;
            break;
        case "capitalize":
            txt.textTransform = ch_tr;
            break;
        case "uppercase":
            txt.textTransform = ch_tr;
            break;
        case "lowercase":
            txt.textTransform = ch_tr;
            break;
    }
}

function ChangeDecorate(ch_de) {
    switch (ch_de) {
        case "none":
            txt.textDecoration = ch_de;
            break;
        case "line-through":
            txt.textDecoration = ch_de;
            break;
        case "overline":
            txt.textDecoration = ch_de;
            break;
        case "underline":
            txt.textDecoration = ch_de;
            break;

    }
}

function ChangeBorder(ch_br) {
    switch (ch_br) {
        case "none":
            txt.border = ch_br;
            break;
        case "dotted":
            txt.border = ch_br;
            break;
        case "double":
            txt.border = ch_br;
            break;
        case "groove":
            txt.border = ch_br;
            break;
        case "dashed":
            txt.border = ch_br;
            break;
        case "insert":
            txt.border = ch_br;
            break;
        case "solid":
            txt.border = ch_br;
            break;
        case "outset":
            txt.border = ch_br;
            break;
        case "ridge":
            txt.border = ch_br;
            break;

    }
}

function ChangeBorderColor(ch_br_Color) {
    switch (ch_br_Color) {

        case "none":
            txt.borderColor = ch_br_Color;
            break;
        case "pink":
            txt.borderColor = ch_br_Color;
            break;
        case "red":
            txt.borderColor = ch_br_Color;
            break;
        case "green":
            txt.borderColor = ch_br_Color;
            break;
        case "blue":
            txt.borderColor = ch_br_Color;
            break;

        case "yellow":
            txt.borderColor = ch_br_Color;
            break;

        case "purple":
            txt.borderColor = ch_br_Color;
            break;



    }
}
