var s = 0;
var scroll = 500;
var windowHeight = window.innerHeight;
var w576 = window.matchMedia('all and (max-width: 576px)');

$('.phone_fixed').css('top', ''+windowHeight/4*3+'px');
$('.phone_text').css('top', ''+windowHeight/4*3+'px');
$('.up_fixed').css('top', ''+windowHeight/4*3+'px');

const displayNoneMaxHeight10 = () => {
	$('.main .menu_fixed').css('display', 'none');
    $('.main .menu_big li').css('max-height', '10vw');
}

const displayBlockMaxHeight0 = () => {
	$('.main .menu_fixed').css('display', 'block');
    $('.main .menu_big li').css('max-height', '0');
}

if ($(window).scrollTop() > scroll) {        
        displayBlockMaxHeight0();
    } else {
        displayNoneMaxHeight10();
    }

$(window).scroll(function() {
    if ($(window).scrollTop() > scroll) {        
        displayBlockMaxHeight0();
    } else {
        displayNoneMaxHeight10();
    }
});

var v2 = $(".second .cont_item").height();
var v3 = $(".third .cont_item").height();
var vs = $(".services .third .cont_item_big").height();
$(".second .front").height(v2);
$(".second .back").height(v2);
$(".third .front").height(v3);
$(".third .back").height(v3);
$(".third .back").height(v3);
$(".second .cont .cont_item .cont_item_ins_w img").height(v2);
$(".services .third .cont .cont_item_big img").height(vs);
var w2 = $(".second .cont_item").width();
var w3 = $(".third .cont_item").width();
var ws = $(".services .third .cont_item_big").width();
$(".second .front").width(w2);
$(".second .back").width(w2);
$(".third .front").width(w3);
$(".third .back").width(w3);
$(".second .cont .cont_item .cont_item_ins_w img").width(w2);
$(".services .third .cont .cont_item_big .back").width(ws);

$('nav label').hover(function() {
    $(this).addClass('before_after_color')
}, function() {
    $(this).removeClass('before_after_color')
});

$('.phone_fixed').hover(function() {
    $('.phone_text').css('max-height', '100%');
    $('.phone_text').css('max-width', '100%');
    if (w576.matches) {
    $('.phone_text').css('font-size', '3.5vw');
    }
    else {
    $('.phone_text').css('font-size', '1.5vw');
    }
}, function() {
    $('.phone_text').css('max-height', '0');
    $('.phone_text').css('max-width', '0');
    $('.phone_text').css('font-size', '0');
});



$('nav .down').on('click', function() {
    if ($("nav ul").is(":visible")) {
    setTimeout(function () {
    $('nav ul').css('max-height', '0');
    }, 700);
    }
    else {
    $('nav ul').css('max-height', '30vw');
    }
});

$('.phone_fixed').on('click', function() {    
    $('.info').css('max-width', '100%');
    $('.info').css('max-height', '100%');    
    $('.info .tbody').css('max-width', '100%');
    $('.info .tbody').css('max-height', '100%');
    $('.info tr').css('max-width', '100%');
    $('.info tr').css('max-height', '100%');
    $('.info .info_cont').css('max-width', '100%');
    $('.info .info_cont').css('max-height', '100%');
    $('.info .info_cont').css('vertical-align', 'middle');
    $('.info .info_cont').css('display', 'block');
    setTimeout(function () {
    if (w576.matches) {
    $('.info .contacts_cont_item_text_forw').css('font-size', '4.1vw');
    $('.info p').css('font-size', '4.1vw');
    $('.info').css('padding', '20vw 5vw 0 5vw');
    $('.info table').css('max-width', '100%');
    $('.info table').css('max-height', '60vw');
    }
    else {
    $('.info .contacts_cont_item_text_forw').css('font-size', '2vw');
    $('.info p').css('font-size', '2vw');
    $('.info').css('padding', '10vw 20vw 0 20vw');
    $('.info table').css('max-width', '100%');
    $('.info table').css('max-height', '40vw');    
    }
    $('.info p').css('padding', '0 2vw');
    }, 100);       
    $('.phone_fixed').css('display', 'none');    
});

$('.info').on('click', function() {    
    $('.info').css('max-width', '0');
    $('.info').css('max-height', '0');
    $('.info').css('padding', '0');
    $('.info table').css('max-width', '0');
    $('.info table').css('max-height', '0');
    $('.info .tbody').css('max-width', '0');
    $('.info .tbody').css('max-height', '0');
    $('.info tr').css('max-width', '0');
    $('.info tr').css('max-height', '0');
    $('.info .info_cont').css('max-width', '0');
    $('.info .info_cont').css('max-height', '0');
    $('.info .info_cont').css('display', 'none');
    $('.info .contacts_cont_item_text_forw').css('font-size', '0');
    $('.info p').css('font-size', '0');
    $('.info p').css('padding', '0');
    $('.phone_fixed').css('display', 'block');    
});

$(window).on('resize', function() {
    windowHeight = window.innerHeight;
    $('.phone_fixed').css('top', ''+windowHeight/4*3+'px');
    $('.phone_text').css('top', ''+windowHeight/4*3+'px');
    $('.up_fixed').css('top', ''+windowHeight/4*3+'px');
    v2 = $(".second .cont_item").height();
    v3 = $(".third .cont_item").height();
    vs = $(".services .third .cont_item_big").height();
    $(".second .front").height(v2);
    $(".second .back").height(v2);
    $(".third .front").height(v3);
    $(".third .back").height(v3);
    $(".second .cont .cont_item .cont_item_ins_w img").height(v2);
    $(".services .third .cont .cont_item_big img").height(vs);
    w2 = $(".second .cont_item").width();
    w3 = $(".third .cont_item").width();
    ws = $(".services .third .cont_item_big").width();
    $(".second .front").width(w2);
    $(".second .back").width(w2);
    $(".third .front").width(w3);
    $(".third .back").width(w3);
    $(".second .cont .cont_item .cont_item_ins_w img").width(w2); 
    $(".services .third .cont .cont_item_big .back").width(ws);
});

$('.menu_fixed a').on('click', function() {
    if($("#link-top_2").is(":checked")) {  
    $('#link-top_2').prop('checked', false);
    }
    if($("#link-services_2").is(":checked")) {  
    $('#link-services_2').prop('checked', false);
    }
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
    if($("#link-top_m").is(":checked")) {  
    $('#link-top_m').prop('checked', false);
    }
    if($("#link-services_u").is(":checked")) {  
    $('#link-services_u').prop('checked', false);
    }
    if($("#link-services_roof_m").is(":checked")) {  
    $('#link-services_roof_m').prop('checked', false);
    }
    if($("#link-services_pol_m").is(":checked")) {  
    $('#link-services_pol_m').prop('checked', false);
    }
});

$('.menu a').on('click', function() {
    if($("#link-top_2").is(":checked")) {  
    $('#link-top_2').prop('checked', false);
    }
    if($("#link-services_2").is(":checked")) {  
    $('#link-services_2').prop('checked', false);
    }
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
    if($("#link-top_m").is(":checked")) {  
    $('#link-top_m').prop('checked', false);
    }
    if($("#link-services_u").is(":checked")) {  
    $('#link-services_u').prop('checked', false);
    }
    if($("#link-services_roof_m").is(":checked")) {  
    $('#link-services_roof_m').prop('checked', false);
    }
    if($("#link-services_pol_m").is(":checked")) {  
    $('#link-services_pol_m').prop('checked', false);
    }
});



$('#link-top_2').on('click', function() {
    if($("#link-services_2").is(":checked")) {  
    $('#link-services_2').prop('checked', false);
    }
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
});

$('#link-top_m').on('click', function() {
    if($("#link-services_u").is(":checked")) {  
    $('#link-services_u').prop('checked', false);
    }
    if($("#link-services_roof_m").is(":checked")) {  
    $('#link-services_roof_m').prop('checked', false);
    }
    if($("#link-services_pol_m").is(":checked")) {  
    $('#link-services_pol_m').prop('checked', false);
    }
});

$('#link-services_2').on('click', function() {
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
});

$('#link-services_weld').on('click', function() {
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
});

$('#link-services_u').on('click', function() {
    if($("#link-services_roof_m").is(":checked")) {  
    $('#link-services_roof_m').prop('checked', false);
    }
    if($("#link-services_pol_m").is(":checked")) {  
    $('#link-services_pol_m').prop('checked', false);
    }
});

$('#link-services_roof').on('click', function() {
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
    if($("#link-services_pol").is(":checked")) {  
    $('#link-services_pol').prop('checked', false);
    }
});

$('#link-services_roof_m').on('click', function() {
    if($("#link-services_u").is(":checked")) {  
    $('#link-services_u').prop('checked', false);
    }
    if($("#link-services_pol_m").is(":checked")) {  
    $('#link-services_pol_m').prop('checked', false);
    }
});

$('#link-services_pol').on('click', function() {
    if($("#link-services_roof").is(":checked")) {  
    $('#link-services_roof').prop('checked', false);
    }
    if($("#link-services_weld").is(":checked")) {  
    $('#link-services_weld').prop('checked', false);
    }
});

$('#link-services_pol_m').on('click', function() {
    if($("#link-services_roof_m").is(":checked")) {  
    $('#link-services_roof_m').prop('checked', false);
    }
    if($("#link-services_u").is(":checked")) {  
    $('#link-services_u').prop('checked', false);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop() > windowHeight){
        $('.up_fixed').css('display', 'block');
    }
    else {
        $('.up_fixed').css('display', 'none');
    }
})

const PricesTopFunction = (prices_top, table) => {
	$(prices_top).on('click', function() {
  		if ($(prices_top + ' .plus').text() == '+') { 
    		$(table).css('display', 'table');
    		$(table +' .tbody').css('display', 'table-row-group');    
    		$(prices_top + ' .plus').html('-');
    		$(prices_top).css('background-color', '#ffc783');
    		$(prices_top).css('border-radius', '0.5vw 0.5vw 0 0');
    		$(prices_top + ' .plus').css('color', '#1e453e'); 
    		$(prices_top + ' h4').css('color', '#1e453e');       
  		}
  		else {
    		$(table).css('display', 'none');
    		$(table + ' .tbody').css('display', 'none');
    		$(prices_top + ' .plus').html('+');
    		$(prices_top).css('background-color', 'rgb(255, 169, 58)');
    		$(prices_top + ' .plus').css('color', '#211c17'); 
    		$(prices_top + ' h4').css('color', '#211c17');
    		$(prices_top).css('border-radius', '0.5vw'); 
		}  
	});
}

PricesTopFunction('.prices_top_1', '.table_1');

PricesTopFunction('.prices_top_2', '.table_2');

PricesTopFunction('.prices_top_3', '.table_3');

PricesTopFunction('.prices_top_4', '.table_4');

PricesTopFunction('.prices_top_5', '.table_5');

PricesTopFunction('.prices_top_6', '.table_6');

PricesTopFunction('.prices_top_7', '.table_7');

PricesTopFunction('.prices_top_8', '.table_8');

PricesTopFunction('.prices_top_9', '.table_9');

PricesTopFunction('.prices_top_10', '.table_10');

PricesTopFunction('.prices_top_11', '.table_11');

PricesTopFunction('.prices_top_12', '.table_12');

PricesTopFunction('.prices_top_13', '.table_13');

PricesTopFunction('.prices_top_14', '.table_14');

PricesTopFunction('.prices_top_15', '.table_15');

PricesTopFunction('.prices_top_16', '.table_16');

const videoFunction = (photo, video_item, videoUrl) => {
	$(photo).on('click', function() {  
    	$(video_item).css('display', 'block');
    	$(video_item + ' iframe').css('display', 'block');
	});

	$(video_item).on('click', function() { 
    	$(video_item).css('display', 'none');  
    	$(video_item + ' iframe').css('display', 'none'); 
    	$(video_item + ' iframe').attr("src",videoUrl);    
	});
}

videoFunction('.photo_1', '.video_item_1', "https://www.youtube.com/embed/kFIuR9FYSU4");

videoFunction('.photo_2', '.video_item_2', "https://www.youtube.com/embed/XDScqq_9sAg");

videoFunction('.photo_3', '.video_item_3', "https://www.youtube.com/embed/h7Lqvs8kUoE");

videoFunction('.photo_4', '.video_item_4', "https://www.youtube.com/embed/1pi1chy2rwk");

videoFunction('.photo_5', '.video_item_5', "https://www.youtube.com/embed/Hzvetf0SGQU");

videoFunction('.photo_6', '.video_item_6', "https://www.youtube.com/embed/6ScFpUwtfcY");

videoFunction('.photo_7', '.video_item_7', "https://www.youtube.com/embed/74SoQBrdsOs");

videoFunction('.photo_8', '.video_item_8', "https://www.youtube.com/embed/KY1ompPfXhE");

videoFunction('.photo_9', '.video_item_9', "https://www.youtube.com/embed/nHBZq8i1dtE");

videoFunction('.photo_10', '.video_item_10', "https://www.youtube.com/embed/OiQjhTHYCxk");

videoFunction('.photo_11', '.video_item_11', "https://www.youtube.com/embed/dtrF1PbggVs");

videoFunction('.photo_12', '.video_item_12', "https://www.youtube.com/embed/Lj6-k9c_Mbw");

videoFunction('.photo_13', '.video_item_13', "https://www.youtube.com/embed/SWRUloSN0Vs");

videoFunction('.photo_14', '.video_item_14', "https://www.youtube.com/embed/sxKs-VRn8Es");

videoFunction('.photo_15', '.video_item_15', "https://www.youtube.com/embed/CfUBNIkiAmY");

videoFunction('.photo_16', '.video_item_16', "https://www.youtube.com/embed/nQ521Cj5ndY");