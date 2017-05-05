
var fadeInDivDown = ["#section_5 .portraitImg", "#section_5 .portraitText","#section_14"];

var scrollDivUp = ["#section_3"];

var scrollDivDown = ["#section_2"];


$(document).ready(function(){


    var images = [
        "url(../p3/img/IMG1.png)",
        "url(../p3/img/IMG2.png)",
        "url(../p3/img/IMG3.png)",
        "url(../p3/img/IMG4.png)",
        "url(../p3/img/IMG5.png)",
        "url(../p3/img/IMG6.png)"
       
    ]
    var captions = [
        "The Russian Blue is a gentle cat with a somewhat shy nature around strangers. They are devoted to and affectionate with their loved ones. Sensitive to their owner’s moods, the Russian Blue will greet you at the door, find a quiet seat next to you, or fetch a toy at playtime. In fact, “fetching” is a favorite pastime for Russians and their owners! Pull out the vacuum cleaner, and the Russian will find a safer and quieter location. Relatively quiet-voiced (except perhaps at mealtime), the Russian Blue appreciates a pat on the head, a window from which to watch the birds, and, of course, the comforts of home. Minimal grooming is required; regular nail clipping, good nutrition, an occasional combing, and lots of petting keep your Russian Blue pet looking spectacular.",
        "Looking for a cat that will be a gentle companion, a playmate for your children, and a full-fledged member of the family? Look no further than the American Shorthair. This breed is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets. The American Shorthair breed originated from cats following settlers from Europe to North America. Records indicate that even the Mayflower carried several cats to hunt the ship’s rats. For centuries, “working cats” flourished along with their pioneer owners and eventually established themselves as the native North American shorthaired cat. Their beauty and loving nature came to be valued as much as their rat-catching skills.",
        "Myths, legend and lore surround the Maine Coon Cat. Some are amusing, some are fantastic flights of fantasy and some are merely plausible. They certainly provide good material for conversation. Many books and articles dealing with these aspects of the Maine Coon Cat are available and have been well received as people never seem to tire of the subject and are always eager to learn more about this National Treasure.The Maine Coon Cat is the native American long-haired cat and was first recognized as a specific breed in Maine where it was named the official cat of the state. These cats were held in high regard by the locals for their mousing talents and special competitions were even held to reward the best “Coon Cat.”",
        "This cat and a few other naturally hairless cats have been found worldwide; produced by Mother Nature, they are the foundation for this unusual breed. Cat breeders in North America and Europe have bred the Sphynx to normal coated cats and back to hairless cats for more than thirty years. The purpose of selective breeding such as this was to create a genetically sound cat with a large gene pool and hybrid vigor. When properly bred, the Sphynx is a very robust breed with few serious health or genetic problems.",
        "As spectators at the show walk by the cage they look quizzically at the cat and say, “It looks like a Persian but it has short hair. The sign says Exotic. Exotic what?!”With today’s busy lifestyles the cat has become a popular pet. Cats are best kept indoors and do well in an apartment or a house. The popularity of the Persian has been evident for many years. The Persian represents the largest class in shows and boasts the largest number of cats registered each year in CFA. However, Persians require daily grooming to maintain their beautiful coat. For busy people who like the look of a Persian but don’t have time for the daily grooming demands, the Exotics are the best kept secret of the cat fancy.",
        "In 1966 a domestic cat gave birth to a hairless kitten in Toronto Canada. It was discovered to be a natural genetic mutation and the Sphynx cat, as we know it today, came into existence. This cat and a few other naturally hairless cats have been found worldwide; produced by Mother Nature, they are the foundation for this unusual breed. Cat breeders in North America and Europe have bred the Sphynx to normal coated cats and back to hairless cats for more than thirty years. The purpose of selective breeding such as this was to create a genetically sound cat with a large gene pool and hybrid vigor. When properly bred, the Sphynx is a very robust breed with few serious health or genetic problems."
    ]
    
    var myIndex = Math.floor(Math.random()*5);
    document.getElementById("meow1").style.backgroundImage = images[myIndex];

    console.log(images[myIndex]);
    
    $("#section_5 .portraitText").text(captions[myIndex]);

    initial();


    // ============= ON SCROLL ============
    // addPosToFadeIn();
    $(window).scroll(function(){
        var scrollH = $(this).scrollTop();
        // console.log(scrollH);
        compareH(scrollH);
    });
});

// function addPosToFadeIn(){
//     for(var i = 0; i < fadeInDivDown.length; i++){
//         var target = $(fadeInDivDown[i]);
//         target.css({'margin-top':'200px'});
//     }
// }


function initial(){
    $('#section_1').removeClass('hide');
    $('#section_1').addClass('flyInRight');
}

function compareH(scrollH){
    var windowH = window.innerHeight;
    for(var i = 0; i < fadeInDivDown.length; i++){
        var target = $(fadeInDivDown[i]);
        var targetOffset = target.offset().top;
        // console.log(targetOffset);
        if(scrollH > targetOffset-windowH/1.2){

            target.addClass('flyInDown');
        }
    }


    for(var i = 0; i < scrollDivUp.length; i++){
        var target = $(scrollDivUp[i]);
        var targetOffset = target.offset().top;
        var moveDistance = scrollH - (targetOffset-windowH/1.2)
        // console.log(targetOffset);
        if(scrollH > targetOffset-windowH/1.2){
            if (scrollH < targetOffset + windowH * 1 ) {
                target.css({
                        'transform':'translate( '+ scrollH * 0+'px, -' + moveDistance/5 + 'px)'});
                // console.log(scrollH);
                // console.log(moveDistance);
            }
        }
    }

    for(var i = 0; i < scrollDivDown.length; i++){
        var target = $(scrollDivDown[i]);
        var targetOffset = target.offset().top;
        var moveDistance = scrollH - (targetOffset-windowH/1.2)
        // console.log(targetOffset);
        if(scrollH > targetOffset-windowH/1.2){
            if (scrollH < targetOffset + windowH * 1 ) {
                target.css({
                        'transform':'translate( '+ scrollH * 0+'px, ' + moveDistance/5 + 'px)'});
                // console.log(scrollH);
                // console.log(moveDistance);
            }
        }
    }
}

