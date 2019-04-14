/* This file is part of the Calibre-Web (https://github.com/janeczku/calibre-web)
 *    Copyright (C) 2018 OzzieIsaacs
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var direction = 0;  // Descending order

$("#desc").click(function() {
    if (direction === 0) {
        return;
    }
    var list = $('#list');
    var second = $('#second');
    var listItems = list.children(".row");
    var reversed, elementLength, middle;
    Array.prototype.push.apply(listItems,second.children(".row"))
    reversed = listItems.get().reverse();
    elementLength = reversed.length;

    middle = parseInt(elementLength / 2) + (elementLength % 2);

    list.append(reversed.slice(0, middle));
    second.append(reversed.slice(middle,elementLength));
    direction = 0;
});


$("#asc").click(function() {
    if (direction === 1) {
        return;
    }
    var list = $("#list");
    var second = $('#second');
    var listItems = list.children(".row");
    Array.prototype.push.apply(listItems,second.children(".row"));
    reversed = listItems.get().reverse();
    elementLength = reversed.length;
    middle = parseInt(elementLength / 2) + (elementLength % 2);

    list.append(reversed.slice(0, middle));
    second.append(reversed.slice(middle,elementLength));
    direction = 1;
});

$("#all").click(function() {
    $(".row").each(function() {
        $(this).show();
    });
});

$(".char").click(function() {
    var character = this.innerText;

    $(".row").each(function() {
        if (this.attributes["data-id"].value.charAt(0).toUpperCase() !== character) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });

});