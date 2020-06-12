let listArr = []; // To Do List Items

$('input#input-text').keyup(function(e) {
    let kc = e.which; // store keycode

    if(kc == 13) {
        // user hit enter
        listArr.push($(this).val());
        // store data typed into array
        // clear input field
        $(this).val('');
    }

    // update list
    showList();
});

function showList() {
    $('ul').empty();
    for(let i=0, max=listArr.length; i < max; i++) {
        $('.container ul').append("<li value='" + i + "'><div class='li-item'><p class='li-p'>" + listArr[i] + "</p><p class='li-x'>X</p></div></li>");
    }

    console.log(listArr);
}

$('.container ul').on('click', '.li-x', function(e) {
    // get list item index in array
    let ind = e.target.parentNode.parentNode.value;

    // remove from array
    listArr.splice(ind, 1);

    // update list
    showList();
    // e.target.parentNode.parentNode.remove();
});