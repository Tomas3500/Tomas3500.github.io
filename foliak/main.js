;(function($){
    $(function(){
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 100,
            }
        });
//         //plaginIsotope
//         var $grid = $('.grid').isotope({
//             itemSelector: '.grid-item',
//             layoutMode: 'masonry',
//             getSortData: {
//                 projets: '.projets',
//                 webdesing: '.webdesing',
//                 desing: '.desing',
//                 category: '[data-category]',
//                 weight: function( itemElem ) {
//                     var weight = $( itemElem ).find('.weight').text();
//                     return parseFloat( weight.replace( /[\(\)]/g, '') );
//                 }
//             }
//         });
//
// // bind sort button click
//         $('.sort-by-button-group').on( 'click', 'button', function() {
//             var sortValue = $(this).attr('data-sort-value');
//             $grid.isotope({ sortBy: sortValue });
//         });
//
// // change is-checked class on buttons
//         $('.button-group').each( function( i, buttonGroup ) {
//             var $buttonGroup = $( buttonGroup );
//             $buttonGroup.on( 'click', 'button', function() {
//                 $buttonGroup.find('.is-checked').removeClass('is-checked');
//                 $( this ).addClass('is-checked');
//             });
//         });
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'masonry', // выбираем модификацию
            getSortData: {
                webdesing: '.webdesing',
                desing: '.desing',
                weight: '.weight',
                category: '.category'
            }
        });

        // bind filter button click
        $('.button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterValue || filterValue;
            $grid.isotope({filter: filterValue});
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0; i < buttonGroups.length; i++) {
            buttonGroups[i].addEventListener('click', onButtonGroupClick);
        }

        function onButtonGroupClick(event) {
            // only button clicks
            if (!matchesSelector(event.target, '.button')) {
                return;
            }
            var button = event.target;
            button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
            button.classList.add('is-checked');
        }
    });
})(jQuery);