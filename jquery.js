const $container = $('<div class="container">');

const createRow = () => $('<div class="row">');

const createColumn = (size, length) => $(`<div class="col-${size}-${length}">`);
const addParagraph = insideText => $(`<p class="description">${insideText}</p>`);

const $firstRow = createRow()
    .append(createColumn('sm', 4).attr('id', 'aaa').append(addParagraph('Jeden')))
    .append(createColumn('sm', 4).attr('id', 'ccc').append(addParagraph('Dwa')))
    .append(createColumn('sm', 4).attr('id', 'ooo').append(addParagraph('Trzy')));

const $secondRow = createRow()
    .append(createColumn('xs', 6).addClass('paintRed').append(addParagraph('Cztery')))
    .append(createColumn('xs', 6).addClass('paintRed').append(addParagraph('Piec')));

const $thirdRow = createRow()
    .append(createColumn('md', 3).attr('data-product', '300').append(addParagraph('Szesc')))
    .append(createColumn('md', 3).attr('data-product', '400').append(addParagraph('Siedem')))
    .append(createColumn('md', 3).attr('data-product', '500').append(addParagraph('Osiem')));

$container
    .append($firstRow)
    .append($secondRow)
    .append($thirdRow)
    .appendTo('body');