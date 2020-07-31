$(function() {
    let $Tab_Options = $('.tab_options_container > *');
    let $Content_Texts = $('.content_text_container > *');

    function ToggleTextElements(e, tagarr) {
        Data_scdOption_arr = [];
        e.each(function() {
            let temp_data_arr = $(this).attr('data-tags').split(' ');
            tagarr.every(tag => temp_data_arr.indexOf(tag) >= 0) ?
                ($(this).removeClass('will_fade_away'), Data_scdOption_arr.push($(this).attr('data-scdOption'))) :
                $(this).addClass('will_fade_away');
        });
    }
    let checked_tags_arr = [];
    let Data_scdOption_arr = [];
    let checked_tag_index;
    let $Filter_Options_Ctn = $('.filter_options_container');
    let this_allcheck_data;
    //// First Block of Filtering
    $Filter_Options_Ctn.delegate('.filter_option', 'click', function() {
        $(this).toggleClass('filter_option_toggleclass');
        if ($(this).text() === 'ALL') {
            this_allcheck_data = $(this).attr('data-allcheck');
            this_allcheck_data === undefined || this_allcheck_data === 'false' ?
                $(this).attr('data-allcheck', 'true') :
                $(this).attr('data-allcheck', 'false');
            $(this).attr('data-allcheck') === 'true' ?
                ($(this).nextAll().addClass('filter_option_toggleclass'),
                    $(this).nextAll().each(function() {
                        let this_a_data = $(this).attr('data-tags');
                        if (checked_tags_arr.indexOf(this_a_data) < 0) {
                            checked_tags_arr.push(this_a_data);
                        }
                    })) :
                ($(this).nextAll().removeClass('filter_option_toggleclass'),
                    $(this).nextAll().each(function() {
                        let this_a_data = $(this).attr('data-tags');
                        let this_a_data_index = checked_tags_arr.indexOf(this_a_data);
                        if (this_a_data_index >= 0) {
                            checked_tags_arr.splice(this_a_data_index, 1);
                        }
                    })
                );
        } else {
            let this_all_siblings = $(this).siblings('.filter_option_all').siblings('p');
            let temp_siblings_allcheck = true;
            this_all_siblings.each(function() {
                temp_siblings_allcheck = temp_siblings_allcheck && $(this).hasClass('filter_option_toggleclass');
            });
            if (temp_siblings_allcheck === true) {
                console.log('this line is all checked');
                $(this).siblings('.filter_option_all').attr('data-allcheck', 'true').addClass('filter_option_toggleclass');
            } else {
                $(this).siblings('.filter_option_all').attr('data-allcheck', 'false').removeClass('filter_option_toggleclass');
            }
            let clicked_tag = $(this).attr('data-tags');
            checked_tag_index = checked_tags_arr.indexOf(clicked_tag);
            checked_tag_index < 0 ? checked_tags_arr.push(clicked_tag) : checked_tags_arr.splice(checked_tag_index, 1);
        }
        ToggleTextElements($Content_Texts, checked_tags_arr);
        Data_scdOption_arr = Data_scdOption_arr.filter((d, i) => Data_scdOption_arr.indexOf(d, 0) === i);
        $Tab_Options.each(function() {
            $(this).removeClass('tab_option_onlyOne');
            let this_data = $(this).attr('data-scdOption');
            Data_scdOption_arr.indexOf(this_data) < 0 ?
                $(this).addClass('will_fade_away') :
                $(this).removeClass('will_fade_away');
            if (this_data === Data_scdOption_arr[0]) {
                $(this).addClass('tab_option_onlyOne');
                console.log('1th Second Part Filter: ', this_data);
                // could be one same function
                $Content_Texts.each(function() {
                    $(this).removeClass('scd_Option_hide');
                    if ($(this).attr('data-scdOption') !== this_data) {
                        $(this).addClass('scd_Option_hide');
                    }
                })
            }
        });
        console.log('First Part Filter Options: ', checked_tags_arr);
        console.log('Second Part Filter Options: ', Data_scdOption_arr);
    });
    let $Tab_Options_Ctn = $('.tab_options_container');
    //// Second Block of Filtering
    $Tab_Options_Ctn.delegate('div', 'click', function() {
        $Tab_Options.removeClass('tab_option_onlyOne');
        $(this).addClass('tab_option_onlyOne');
        let temp_scdOption = $(this).attr('data-scdOption');
        // could be one same function
        $Content_Texts.each(function() {
            $(this).removeClass('scd_Option_hide');
            if ($(this).attr('data-scdOption') !== temp_scdOption) {
                $(this).addClass('scd_Option_hide');
            }
        })
    });
});