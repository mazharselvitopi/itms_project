let stylesCodes = [];
let stylesContent = [];

//one cikan yazi paragraf seklinde
//bootstrap lead konusu
//https://getbootstrap.com/docs/4.1/content/typography/
stylesCodes[0] = '[lead]';
stylesCodes[1] = '[/lead]';
stylesContent[stylesCodes[0]] = '<p class="lead">';
stylesContent[stylesCodes[1]] = '</p>';

//Additional content bootstrap
//https://getbootstrap.com/docs/4.1/components/alerts/
stylesCodes[2] = '[baslik_1]';
stylesCodes[3] = '[icerik_1]';
stylesCodes[4] = '[icerik2_1]';//kisa yazi cizgi altinda ne ise yarar bilemiyorum
stylesCodes[5] = '[/icerik2_1]';
stylesContent[stylesCodes[2]] = '<div class="alert alert-success" role="alert"><h4 class="alert-heading">';
stylesContent[stylesCodes[3]] = '</h4><p>';
stylesContent[stylesCodes[4]] = '</p><hr><p class="mb-0">';
stylesContent[stylesCodes[5]] = '</p></div>';


function processContent(unprocessedPageContent){
    let pageContent = unprocessedPageContent;
    for(let i = 0; i < pageContent.length; i++){
        for(let j = 0; j < stylesCodes.length; j++){
            pageContent = pageContent.replace(stylesCodes[j], stylesContent[stylesCodes[j]] );
            pageContent = pageContent.replace("\n", ' ');
        }
    }
    return pageContent;
}