$(function() {
    $('#yes').click(function(event) {
        modal('我就知道您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('那个紫罗兰一般小巧的女孩，那个似花瓣一般随风摇曳的女孩', A);
    });
});

function A() {
    modal('以远超过地球的重量吸引着我！', B);
}

function B() {
    modal('那一瞬间，我就如同牛顿的苹果一般，不受控制地滚落在她脚下', C);
}

function C() {
    modal('我的心脏在持续着令人眩晕的摆动', D);
}

function D() {
    modal('我真心倾心于你', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('在一起吧', G);
}

function G() {
    modal('跟你在一起的时光全都很耀眼', H);
}

function H() {
    modal('因为天气好，因为天气不好，因为天气刚刚好', I);
}

function I() {
    modal('每一天都很美好', J)
}

function J() {
    modal('爱你', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
