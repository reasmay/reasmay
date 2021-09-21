// **************************Carrousel****************************//
$video = $('#carrousel li');
indexVideo = $video.length - 1;
i = 0;
$currentVideo = $video.eq(i);

$video.css('display', 'none');
$currentVideo.css('display', 'block');

$('#slider-next').click(function() {

    i++;

    if (i <= indexVideo) {

        $video.css('display', 'none');

        $currentVideo = $video.eq(i);

        $currentVideo.css('display', 'block');

        $('video').trigger('pause');
    } else {

        i = indexVideo;
    }

});

$('#slider-previous').click(function() {

    i--;

    if (i >= 0) {

        $video.css('display', 'none');

        $currentVideo = $video.eq(i);

        $currentVideo.css('display', 'block');

        $('video').trigger('pause');
    } else {
        i = 0;
    }

});

//***********************************monter de page**************************//
$('#naruto').click(function() {

    $('html, body').animate({ scrollTop: 0 }, 1500);

});