$(document).ready(function () {
    session = new QiSession();

    $('#page_accueil').show();
    $('#page_choix').hide();
    $('#page_resultat').hide();



    session.service("ALMemory").done(function(ALMemory) {

        ALMemory.subscriber("MonCode/Accueil").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_accueil').show();
                $('#page_choix').hide();
                $('#page_resultat').hide();

            });
        });


        ALMemory.subscriber("MonCode/Page1").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_choix').show();
                $('#page_accueil').hide();
                $('#page_resultat').hide();
            });
        });

        ALMemory.subscriber("MonCode/Page2").done(function(subscriber) {

            subscriber.signal.connect(function() {
                $('#page_resultat').show();
                $('#page_accueil').hide();
                $('#page_choix').hide();
            });
        });



    function raise(event, value) {
        session.service("ALMemory").done(function(ALMemory) {
            ALMemory.raiseEvent(event, value);
        });
    }

	$('#footer_start1').on('click', function() {
        console.log("click Start1");
        raise('MonCode/Page1', 1)
    });

	$('#footer_start2').on('click', function() {
        console.log("click Page2");
        raise('MonCode/Page2', 1)
    });

  $('#footer_start3').on('click', function() {
        console.log("click Page3");
        raise('MonCode/Page3', 1)
    });


    $('#bouton_accueil').on('click', function() {
        console.log("click accueil");
        raise('MonCode/Accueil', 1)
    });


});
