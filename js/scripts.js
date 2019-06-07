$(document).ready(function () {
  $('form#quiz').submit(function (event) {
    event.preventDefault();
    var answers = $(this).serializeArray();
    var scrores = {
      javaScript: 0,
      ruby: 0,
      cSharp: 0,
      python: 0,
      rust: 0,
    };
    for (var answer of answers) {
      scores[answer.value] += 1;
    }

    var maxLanguage = 'javaScript';
    for (var language in scores) {
      if (scores[language] > scores[maxLanguage]) {
        maxLanguage = language;
        console.log();
      }
    }

    $('form#quiz').css('display', 'none');
    $('.result#' + maxLanguage).css('display', 'block');
  });
});
