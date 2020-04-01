$(function () {
    let box = $('.pbox')
    box.hide();

    $('a').click(function () {
        let content = $(this).attr('data-id');

        box.hide();
        $('#' + content).show();
    });
});